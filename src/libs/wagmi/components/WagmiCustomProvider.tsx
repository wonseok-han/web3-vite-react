import type { QueryClient } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

import { wagmiConfig } from '../config';

type WagmiCustomProviderProps = {
  queryClient: QueryClient;
};

const WagmiCustomProvider = ({
  children,
  queryClient,
}: PropsWithChildren<WagmiCustomProviderProps>) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default WagmiCustomProvider;
