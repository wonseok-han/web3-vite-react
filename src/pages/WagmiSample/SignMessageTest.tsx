import { HomeButton } from '@components';
import WagmiSignMessage from '@libs/wagmi/samples/WagmiSignMessage';

const SignMessageTest = () => {
  return (
    <>
      <WagmiSignMessage />

      <HomeButton />
    </>
  );
};

export default SignMessageTest;
