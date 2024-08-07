import type { ChangeEvent } from 'react';

import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';

const Web3ReactSignMessage = () => {
  const { provider } = useWeb3React();
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const handleClick = () => {
    const isOk = confirm('Sign Message를 보내시겠습니까?');
    if (!isOk) return;

    const signer = provider?.getSigner();
    signer
      ?.signMessage(message)
      .then((result) => {
        console.log('web3-react sign_message::', result);
        setResult(result);
      })
      .catch((error) => console.log('web3-react sign_error::', error));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className="wagmiSignMessage__wrap">
      <div className="wagmiSignMessage__card">
        <div className="wagmiSignMessage__card_title">
          <h2 className="item_label">Sign Message</h2>
        </div>
        <div className="wagmiSignMessage__card_content">
          <input
            className="input__default"
            placeholder="input message"
            style={{ flexGrow: 1 }}
            value={message}
            onChange={handleChange}
          />
          <button className="button__container fit-width" onClick={handleClick}>
            Sign Message
          </button>
        </div>
        <p
          style={{
            fontSize: '0.875rem',
          }}
        >
          • 서명 메시지를 보내보세요.
        </p>

        <div
          className="wagmiSignMessage__card_content"
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '10px',
          }}
        >
          <span
            className="wagmiSignMessage__card_title"
            style={{
              fontSize: '1rem',
            }}
          >
            returned hash
          </span>
          <textarea
            readOnly
            className="input__default"
            placeholder="input message"
            value={result}
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Web3ReactSignMessage;
