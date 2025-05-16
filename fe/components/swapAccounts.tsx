'use client';

import React, { useState, useEffect, useRef } from "react";
import { createCoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import { Web3Provider, ExternalProvider } from "@ethersproject/providers";
import { parseEther, parseUnits } from "ethers";
import { Contract } from "@ethersproject/contracts";

// Uniswap V2 Router address on Base Mainnet (replace if using another DEX)
const UNISWAP_ROUTER = "0x327Df1E6de05895d2ab08513aaDD9313Fe505d86";
// USDC address on Base Mainnet
const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const WETH_ADDRESS = "0x4200000000000000000000000000000000000006";

type SwapComponentsProps = {
  setBits: React.Dispatch<React.SetStateAction<number>>;
}

export default function SwapAccounts({ setBits }: SwapComponentsProps) {
  const [address, setAddress] = useState<string | null>(null);
  const [amount, setAmount] = useState<string>("0.01"); 
  const [txHash, setTxHash] = useState<string | null>(null);
  const [direction, setDirection] = useState<"ETH_TO_USDC" | "USDC_TO_ETH">("ETH_TO_USDC");
  const [loading, setLoading] = useState(false);

  const providerRef = useRef<ExternalProvider | null>(null);
  const ethersProviderRef = useRef<Web3Provider | null>(null);

  useEffect(() => {
    let provider: ExternalProvider | null = null;
    if (typeof window !== "undefined" && !providerRef.current) {
      const coinbaseWallet = createCoinbaseWalletSDK({
        appName: "Byte",
        appLogoUrl: "/assets/footerAssets/Vector (1).png"
      });
      provider = coinbaseWallet.getProvider() as ExternalProvider;
      providerRef.current = provider;
      ethersProviderRef.current = new Web3Provider(provider);

      type ProviderWithOn = ExternalProvider & {
        on?: (event: string, listener: (...args: unknown[]) => void) => void;
      };

      (provider as ProviderWithOn).on?.("connect", (info: unknown) => {
        console.log("Wallet connected:", info);
      });

      (provider as ProviderWithOn).on?.("disconnect", (...args: unknown[]) => {
        setAddress(null);
        const error = args[0];
        console.log("Wallet disconnected:", error);
      });

      (provider as ProviderWithOn).on?.("accountsChanged", (...args: unknown[]) => {
        const accounts = args[0] as string[] | undefined;
        setAddress(accounts && accounts[0] ? accounts[0] : null);
        console.log("New account:", accounts && accounts[0]);
      });

      provider.request?.({ method: "eth_accounts" }).then((accounts: string[]) => {
        if (accounts && accounts.length > 0) setAddress(accounts[0]);
      });
    }

    return () => {
      type ProviderWithRemoveAllListeners = ExternalProvider & {
        removeAllListeners?: () => void;
      };
      (providerRef.current as ProviderWithRemoveAllListeners)?.removeAllListeners?.();
    };
  }, []);

  async function connectWallet() {
    if (!providerRef.current) return;
    const accounts = await providerRef.current.request?.({ method: "eth_requestAccounts" });
    setAddress(accounts[0]);
    console.log("Connected account:", accounts[0]);
  }

  async function swapETHforUSDC() {
    if (!address || !ethersProviderRef.current) return;
    setLoading(true);
    setTxHash(null);
    try {
      const signer = ethersProviderRef.current.getSigner();
      const routerAbi = [
        "function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) payable returns (uint[] memory amounts)",
        "function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) returns (uint[] memory amounts)",
        "function approve(address spender, uint256 amount) external returns (bool)"
      ];
      const router = new Contract(UNISWAP_ROUTER, routerAbi, signer);

      const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes from now
      const amountOutMin = 0; // For demo only! In production, calculate min for slippage

      if (direction === "ETH_TO_USDC") {
        // ETH -> USDC
        const path = [WETH_ADDRESS, USDC_ADDRESS];
        const tx = await router.swapExactETHForTokens(
          amountOutMin,
          path,
          address,
          deadline,
          { value: parseEther(amount) }
        );
        setTxHash(tx.hash);
        await tx.wait();
        setBits(prev => prev + 200);
        alert("Swap complete!");
      } else {
        // USDC -> ETH
        const path = [USDC_ADDRESS, WETH_ADDRESS];
        // Approve router to spend USDC first
        const usdcAbi = ["function approve(address spender, uint256 amount) external returns (bool)"];
        const usdc = new Contract(USDC_ADDRESS, usdcAbi, signer);
        const decimals = 6;
        const amountIn = parseUnits(amount, decimals);

        const approveTx = await usdc.approve(UNISWAP_ROUTER, amountIn);
        await approveTx.wait();

        const tx = await router.swapExactTokensForETH(
          amountIn,
          amountOutMin,
          path,
          address,
          deadline
        );
        setTxHash(tx.hash);
        await tx.wait();
        setBits(prev => prev + 200);
        alert("Swap complete!");
      }
    } catch (err) {
      let errorMessage = "Swap failed";
      if (err && typeof err === "object" && "message" in err) {
        errorMessage += ": " + (err as { message: string }).message;
      }
      alert(errorMessage);
    }
    setLoading(false);
  }

  function handleDirectionChange() {
    setDirection(d => (d === "ETH_TO_USDC" ? "USDC_TO_ETH" : "ETH_TO_USDC"));
    setAmount("0.01");
    setTxHash(null);
  }

   return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg border">
      <h2 className="text-xl font-bold mb-4 text-center">Swap ETH &lt;&gt; USDC</h2>
      {!address ? (
        <button
          onClick={connectWallet}
          className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold"
        >
          Connect Wallet
        </button>
      ) : (
        <>
          <div className="mb-4 text-center">
            <span className="text-gray-700">Connected:</span>
            <span className="ml-2 font-mono text-sm">{address.slice(0, 6)}...{address.slice(-4)}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold">{direction === "ETH_TO_USDC" ? "ETH" : "USDC"}</span>
            <button
              onClick={handleDirectionChange}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-xs"
              title="Switch direction"
            >
              ⇄
            </button>
            <span className="font-semibold">{direction === "ETH_TO_USDC" ? "USDC" : "ETH"}</span>
          </div>
          <input
            type="number"
            min="0"
            step={direction === "ETH_TO_USDC" ? "0.001" : "0.01"}
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-4"
            placeholder={direction === "ETH_TO_USDC" ? "ETH amount" : "USDC amount"}
          />
          <button
            onClick={swapETHforUSDC}
            disabled={loading}
            className={`w-full px-4 py-2 rounded font-semibold ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700 text-white"}`}
          >
            {loading
              ? "Swapping..."
              : direction === "ETH_TO_USDC"
                ? `Swap ${amount} ETH for USDC`
                : `Swap ${amount} USDC for ETH`}
          </button>
          {txHash && (
            <p className="mt-4 text-xs text-center">
              Tx:{" "}
              <a
                href={`https://basescan.org/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {txHash.slice(0, 6)}...{txHash.slice(-4)}
              </a>
            </p>
          )}
        </>
      )}
    </div>
  );
}