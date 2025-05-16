"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Wallet as CoinbaseWallet, ConnectWallet } from '@coinbase/onchainkit/wallet';

const wallets = [
  { id: 1, name: "MetaMask", icon: "/assets/modalAssets/metaMask.png" },
  { id: 2, name: "Wallet Connect", icon: "/assets/modalAssets/walletConnect.png" },
  { id: 3, name: "Browser Wallet", icon: "/assets/modalAssets/browserWallet.png" },
  { id: 4, name: "Coin Base", icon: "/assets/modalAssets/coinBase.png" },
  { id: 5, name: "Solflare", icon: "/assets/modalAssets/solflare.png" },
  { id: 6, name: "Bidget", icon: "/assets/modalAssets/bidget.png" },
  { id: 7, name: "Fordefi", icon: "/assets/modalAssets/fordefi.png" },
  { id: 8, name: "Rabby", icon: "/assets/modalAssets/rabby.png" },
  { id: 9, name: "Salmon", icon: "/assets/modalAssets/salmon.png" },
];

interface walletProps {
  onViewChange: (view: "main" | "more-options" | "roleSelection") => void;
}

const Wallet = ({ onViewChange }: walletProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="w-full grid grid-cols-3 gap-1 xs:gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-5 md:mt-6 px-0.5 xs:px-1 sm:px-2 md:px-4">
      {wallets.map((wallet) =>
        wallet.id === 4 ? (
          <div
            key={wallet.id}
            className="relative flex flex-col items-center justify-center"
            onMouseEnter={() => setHoveredId(wallet.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Overlayed image and label */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
              <div
                className={`border border-green-600 rounded-full h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 p-1 sm:p-2 flex items-center justify-center mb-1 xs:mb-2 transition ${
                  hoveredId === wallet.id ? "bg-green-600" : "bg-green-100"
                }`}
              >
                <Image
                  src={wallet.icon}
                  alt={wallet.name}
                  width={32}
                  height={32}
                  quality={100}
                  className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full object-contain"
                />
              </div>
              <span className="text-black text-xs xs:text-sm sm:text-base text-center line-clamp-1" title={wallet.name}>
                {wallet.name}
              </span>
            </div>
            <CoinbaseWallet
              className="flex flex-col items-center justify-center hover:bg-green-100 border shadow-md sm:shadow-lg py-2 px-1 xs:py-3 xs:px-2 transition rounded-md sm:rounded-lg cursor-pointer w-full h-full min-w-[100px] min-h-[100px]"
            >
              <ConnectWallet
                onConnect={() => {
                  onViewChange("roleSelection");
                  const authToken = "demo-auth-token";
                  document.cookie = `authToken=${authToken}; path=/; max-age=86400; SameSite=Lax`;
                }}
                className="w-full h-full"
              />
            </CoinbaseWallet>
          </div>
        ) : (
          <button
            key={wallet.id}
            onMouseEnter={() => setHoveredId(wallet.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => {
              onViewChange("roleSelection");
            }}
            className="flex flex-col items-center justify-center hover:bg-green-100 border shadow-md sm:shadow-lg py-2 px-1 xs:py-3 xs:px-2 transition rounded-md sm:rounded-lg"
          >
            <div
              className={`border border-green-600 rounded-full h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 p-1 sm:p-2 flex items-center justify-center mb-1 xs:mb-2 transition ${
                hoveredId === wallet.id ? "bg-green-600" : "bg-green-100"
              }`}
            >
              <Image
                src={wallet.icon}
                alt={wallet.name}
                width={32}
                height={32}
                quality={100}
                className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full object-contain"
              />
            </div>
            <span className="text-black text-xs xs:text-sm sm:text-base text-center line-clamp-1" title={wallet.name}>
              {wallet.name}
            </span>
          </button>
        )
      )}
    </div>
  );
};

export default Wallet;