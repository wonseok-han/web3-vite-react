# web3-react Wallet Connect

## Getting Started

```bash
npm install @web3-react/core @web3-react/types @web3-react/coinbase-wallet @web3-react/metamask @web3-react/gnosis-safe @web3-react/network @web3-react/walletconnect
```

```ts
// main.ts에 window.ethereum 관련 코드를 추가합니다.

...
if (window?.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
...
```

## Reference

* **web3-react**
  - https://github.com/Uniswap/examples
