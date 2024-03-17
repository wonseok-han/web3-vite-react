import { QueryClient, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import ResponseProvider from '@contexts/ResponseProvider';
import WagmiCustomProvider from '@libs/wagmi/components/WagmiCustomProvider';
import { Web3ContextProvider } from '@libs/web3-react/components/Web3ReactProvider';
import Routes from 'router/Routes';

import { ErrorPage, RouteTabs } from './components';

const queryClient = new QueryClient();

const TABS_DATA = [
  {
    id: 1,
    text: 'Component Samples',
    path: '/sample-page',
  },
  {
    id: 2,
    text: 'Wagmi',
    path: '/wagmi-sample',
  },
  {
    id: 3,
    text: 'web3-react',
    path: '/web3-react-sample',
  },
];

const CommonComponent = () => {
  return (
    <RouteTabs config={TABS_DATA}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <ErrorPage error={error} onClick={() => resetErrorBoundary()} />
            )}
            onReset={reset}
          >
            <Routes />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </RouteTabs>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ResponseProvider>
        <WagmiCustomProvider queryClient={queryClient}>
          <Web3ContextProvider>
            <CommonComponent />
          </Web3ContextProvider>
        </WagmiCustomProvider>
      </ResponseProvider>
    </BrowserRouter>
  );
}

export default App;
