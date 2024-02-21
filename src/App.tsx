import { QueryClient, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import WagmiCustomProvider from '@libs/wagmi/components/WagmiCustomProvider';
import Routes from 'router/Routes';

import { ErrorPage, Tabs } from './components';

const queryClient = new QueryClient();

const TABS_DATA = [
  {
    id: 1,
    text: 'Wagmi',
    path: '/wagmi-sample',
    content: null,
  },
  {
    id: 2,
    text: 'web3-react',
    path: '/web3-react',
    content: null,
  },
];

function App() {
  return (
    <WagmiCustomProvider queryClient={queryClient}>
      <BrowserRouter>
        <Tabs isRoute config={TABS_DATA}>
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
        </Tabs>
      </BrowserRouter>
    </WagmiCustomProvider>
  );
}

export default App;
