import { Buffer } from 'buffer';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

if (window?.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}

// Node polyfills required by WalletConnect are no longer bundled with webpack
window.Buffer = Buffer;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
