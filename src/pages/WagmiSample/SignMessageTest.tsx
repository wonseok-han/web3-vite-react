import { HomeButton } from '@components';
import WagmiSignMessage from '@libs/wagmi/samples/WagmiSignMessage';

const SignMessageTest = () => {
  return (
    <>
      <WagmiSignMessage />

      <HomeButton href="/wagmi-sample" />
    </>
  );
};

export default SignMessageTest;
