import { HomeButton } from '@components';
import Web3ReactSignMessage from '@libs/web3-react/samples/Web3ReactSignMessage';

const SignMessageTest = () => {
  return (
    <>
      <Web3ReactSignMessage />

      <HomeButton href="/web3-react-sample" />
    </>
  );
};

export default SignMessageTest;
