import { http, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors';

// https://wagmi.sh/react/getting-started
export const wagmiConfig = createConfig({
  chains: [sepolia],
  connectors: [
    injected(),
    walletConnect({
      projectId: import.meta.env.VITE_PROJECT_ID,
      qrModalOptions: { themeMode: 'light' },
    }),
    coinbaseWallet({
      appName: 'My Wagmi App',
    }),
  ],
  transports: {
    [sepolia.id]: http(),
  },
});
