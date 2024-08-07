import { useWagmiAccount } from '@libs/wagmi/hooks';
import WagmiConnect from '@libs/wagmi/samples/WagmiConnect';
import WagmiSendTransaction from '@libs/wagmi/samples/WagmiSendTransaction';
import WagmiSignMessage from '@libs/wagmi/samples/WagmiSignMessage';

import '@libs/wagmi/css/sample.scss';

const WagmiSample = () => {
  const { isConnected } = useWagmiAccount();

  return (
    <>
      <WagmiConnect />

      {isConnected && <WagmiSignMessage />}
      {isConnected && <WagmiSendTransaction />}
    </>
  );
};

export default WagmiSample;
