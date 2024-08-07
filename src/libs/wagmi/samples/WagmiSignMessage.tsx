import type { ChangeEvent } from 'react';

import { useEffect, useState } from 'react';

import { useWagmiSignMessage } from '../hooks';

import '../css/sample.scss';

const WagmiSignMessage = () => {
  const { data, error, signMessage } = useWagmiSignMessage();
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const isOk = confirm('Sign Message를 보내시겠습니까?');
    if (!isOk) return;

    signMessage({ message: message });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    if (data) {
      console.log('sign_message::', data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log('sign_error::', error);
    }
  }, [error]);

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
            value={data}
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WagmiSignMessage;
