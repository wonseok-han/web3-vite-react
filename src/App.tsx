import { QueryClient, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { useAlert } from '@contexts/DialogProvider/AlertContext';
import ResponseProvider from '@contexts/ResponseProvider';
import WagmiCustomProvider from '@libs/wagmi/components/WagmiCustomProvider';
import { Web3ContextProvider } from '@libs/web3-react/components/Web3ReactProvider';
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
  const alert = useAlert();

  return (
    <BrowserRouter>
      <ResponseProvider>
        <WagmiCustomProvider queryClient={queryClient}>
          <button
            onClick={async () => {
              const isOk = await alert({
                title: 'Alert',
                content: '이 작업을 수행하시겠습니까?',
                modules: ['custom'],
                customText: '커스텀버튼',
              });

              if (isOk) {
                console.log('alert callback...');
              }
            }}
          >
            다이얼로그
          </button>
          <Web3ContextProvider>
            <CommonComponent />
          </Web3ContextProvider>
        </WagmiCustomProvider>
      </ResponseProvider>
    </BrowserRouter>
  );
}

export default App;
