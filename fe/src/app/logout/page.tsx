import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletAdvancedAddressDetails,
  WalletAdvancedTokenHoldings,
  WalletAdvancedTransactionActions,
  WalletAdvancedWalletActions,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';

export default function WalletAdvancedDemo() {
  return (
    <Wallet>
      <ConnectWallet />
      <WalletDropdown>
        <WalletAdvancedWalletActions />
        <WalletAdvancedAddressDetails />
        <WalletAdvancedTransactionActions />
        <WalletAdvancedTokenHoldings />
        <WalletDropdownDisconnect />
      </WalletDropdown>
    </Wallet>
  )
}