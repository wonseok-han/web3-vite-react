import type { ChangeEvent } from 'react';

import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';

const Web3ReactSignMessage = () => {
  const { provider } = useWeb3React();
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const signer = provider?.getSigner();
    signer
      ?.signMessage(message)
      .then((result) => console.log('web3-react sign_message::', result))
      .catch((error) => console.log('web3-react sign_error::', error));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        padding: '10px 5px',
        width: '100%',
      }}
    >
      <input
        className="input__default"
        placeholder="input message"
        value={message}
        onChange={handleChange}
      />
      <button className="button__container fit-width" onClick={handleClick}>
        Sign Message
      </button>
    </div>
  );
};

export default Web3ReactSignMessage;
