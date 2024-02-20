import type { ChangeEvent } from 'react';

import { useEffect, useState } from 'react';

import { useWagmiSignMessage } from '../hooks';

const WagmiSignMessage = () => {
  const { data, error, signMessage } = useWagmiSignMessage();
  const [message, setMessage] = useState('');

  const handleClick = () => {
    signMessage({ message: message });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    if (data) {
      console.log('sign_transaction::', data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log('sign_error::', error);
    }
  }, [error]);

  return (
    <>
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
        <button className="button__default fit-width" onClick={handleClick}>
          Sign Message
        </button>
      </div>
    </>
  );
};

export default WagmiSignMessage;
