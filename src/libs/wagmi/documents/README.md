# Wagmi Wallet Connect

## Getting Started

```bash
npm install @web3modal/wagmi wagmi viem @tanstack/react-query buffer
```

```ts
// main.ts에 buffer 관련 코드를 추가합니다.

...
window.Buffer = Buffer; // buffer

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
...
```

## Reference

* **Wagmi**
  - https://docs.walletconnect.com/getting-started
  - https://wagmi.sh/react/getting-started
