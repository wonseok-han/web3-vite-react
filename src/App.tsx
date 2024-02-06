import { QueryClient } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import WagmiCustomProvider from '@libs/wagmi/components/WagmiCustomProvider';
import Routes from 'router/Routes';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiCustomProvider queryClient={queryClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </WagmiCustomProvider>
  );
}

export default App;
