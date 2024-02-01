import { useWagmiConnect } from '@libs/wagmi/hooks';

const WalletOptions = () => {
  const { connectors, connect } = useWagmiConnect();

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ));
};

export default WalletOptions;
