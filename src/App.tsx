import { QueryClient, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import WagmiCustomProvider from '@libs/wagmi/components/WagmiCustomProvider';
import Routes from 'router/Routes';

import { ErrorPage, RouteTabs } from './components';

const queryClient = new QueryClient();

const TABS_DATA = [
  {
    id: 1,
    text: 'Wagmi',
    path: '/wagmi-sample',
  },
  {
    id: 2,
    text: 'web3-react',
    path: '/web3-react',
  },
];

function App() {
  return (
    <WagmiCustomProvider queryClient={queryClient}>
      <BrowserRouter>
        <RouteTabs config={TABS_DATA}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                fallbackRender={({ error, resetErrorBoundary }) => (
                  <ErrorPage
                    error={error}
                    onClick={() => resetErrorBoundary()}
                  />
                )}
                onReset={reset}
              >
                <Routes />
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </RouteTabs>
      </BrowserRouter>
    </WagmiCustomProvider>
  );
}

export default App;
