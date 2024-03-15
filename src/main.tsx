import { Buffer } from 'buffer';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import DialogProvider from '@contexts/DialogProvider/index.tsx';

import App from './App.tsx';

if (window?.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}

// Node polyfills required by WalletConnect are no longer bundled with webpack
window.Buffer = Buffer;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DialogProvider>
      <App />
    </DialogProvider>
  </StrictMode>
);
