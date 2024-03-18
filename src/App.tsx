import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import ResponseProvider from '@contexts/ResponseProvider';
import { Web3ContextProvider } from '@libs/web3-react/components/Web3ReactProvider';
import Routes from 'router/Routes';

import { CustomErrorBoundary, ErrorPage, RouteTabs } from './components';

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
      <CustomErrorBoundary ErrorComponent={ErrorPage}>
        <Routes />
      </CustomErrorBoundary>
    </RouteTabs>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ResponseProvider>
        <>
          <ReactQueryDevtools initialIsOpen={false} />
          {/* <WagmiCustomProvider queryClient={queryClient}> */}
          <Web3ContextProvider>
            <CommonComponent />
          </Web3ContextProvider>
          {/* </WagmiCustomProvider> */}
        </>
      </ResponseProvider>
    </BrowserRouter>
  );
}

export default App;
