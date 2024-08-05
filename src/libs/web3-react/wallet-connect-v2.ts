import type { ConnectionProps } from './connections';

import { initializeConnector } from '@web3-react/core';
import { WalletConnect } from '@web3-react/walletconnect-v2';

import { TESTNET_CHAINS } from './chains';
import { ConnectionType } from './connections';

const [testnet, ...optionalChains] = Object.keys(TESTNET_CHAINS).map(Number);

export function buildWalletConnectConnector() {
  const [web3WalletConnect, web3WalletConnectHooks] =
    initializeConnector<WalletConnect>(
      (actions) =>
        new WalletConnect({
          actions,
          options: {
            projectId: import.meta.env.VITE_PROJECT_ID,
            chains: [testnet],
            optionalChains,
            showQrModal: true,
          },
        })
    );
  const walletConnectConnection: ConnectionProps = {
    connector: web3WalletConnect,
    hooks: web3WalletConnectHooks,
    type: ConnectionType.WALLET_CONNECT,
  };
  return walletConnectConnection;
}
