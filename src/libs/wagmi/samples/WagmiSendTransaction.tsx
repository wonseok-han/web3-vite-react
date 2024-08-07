import type { ChangeEvent } from 'react';

import { useEffect, useState } from 'react';
import { parseEther } from 'viem';

import { useWagmiAccount, useWagmiSendTransaction } from '../hooks';

import '../css/sample.scss';

const WagmiSendTransaction = () => {
  const { address, chainId } = useWagmiAccount();
  const { data: hash, error, sendTransaction } = useWagmiSendTransaction();
  const [toAddress, setToAddress] = useState<`0x${string}` | undefined>();
  const [money, setMoney] = useState('');

  const handleClick = () => {
    const isOk = confirm('트랜잭션을 전송하시겠습니까?');
    if (!isOk) return;

    sendTransaction({
      account: address,
      chainId: chainId,
      to: toAddress,
      value: parseEther(money),
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.slice(0, 2) !== '0x') {
      setToAddress(`0x${event.target.value}`);
    } else {
      setToAddress(event.target.value as `0x${string}`);
    }
  };

  const handleMoneyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMoney(event.target.value);
  };

  useEffect(() => {
    if (hash) {
      console.log('send transaction::', hash);
    }
  }, [hash]);

  useEffect(() => {
    if (error) {
      console.log('send transaction error::', error);
    }
  }, [error]);

  return (
    <div className="wagmiSignMessage__wrap">
      <div className="wagmiSignMessage__card">
        <div className="wagmiSignMessage__card_title">
          <h2 className="item_label">Send Transaction</h2>
        </div>
        <div className="wagmiSignMessage__card_content">
          <input
            className="input__default"
            placeholder="0x... 형태로 입력해주세요."
            style={{ flexGrow: 1 }}
            value={toAddress}
            onChange={handleChange}
          />
        </div>
        <p
          style={{
            fontSize: '0.875rem',
          }}
        >
          • 돈을 받을 지갑 주소를 입력해주세요. (0x...)
        </p>

        <div className="wagmiSignMessage__card_content">
          <input
            className="input__default"
            placeholder="ex) 0.0001"
            style={{ flexGrow: 1 }}
            value={money}
            onChange={handleMoneyChange}
          />
          <button className="button__container fit-width" onClick={handleClick}>
            Send Transaction
          </button>
        </div>
        <p
          style={{
            fontSize: '0.875rem',
          }}
        >
          • 입력한 값 만큼 지갑에 전송되요. 가스비.....
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
            value={hash}
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WagmiSendTransaction;
