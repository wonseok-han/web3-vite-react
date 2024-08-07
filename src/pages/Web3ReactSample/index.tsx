import { useWeb3React } from '@web3-react/core';

import Web3React from '@libs/web3-react/samples/Web3React';
import Web3ReactSendTransaction from '@libs/web3-react/samples/Web3ReactSendTransaction';
import Web3ReactSignMessage from '@libs/web3-react/samples/Web3ReactSignMessage';

const Web3ReactSample = () => {
  const { isActive } = useWeb3React();

  return (
    <>
      <Web3React />

      {isActive && <Web3ReactSignMessage />}
      {isActive && <Web3ReactSendTransaction />}
    </>
  );
};

export default Web3ReactSample;
