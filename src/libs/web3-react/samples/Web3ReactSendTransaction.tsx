import type { ChangeEvent } from 'react';

import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import { parseEther } from 'viem';

import '../css/sample.scss';

const Web3ReactSendTransaction = () => {
  const { chainId, provider } = useWeb3React();
  const [toAddress, setToAddress] = useState('');
  const [money, setMoney] = useState('');
  const [result, setResult] = useState('');

  const handleClick = () => {
    const isOk = confirm('트랜잭션을 전송하시겠습니까?');
    if (!isOk) return;

    const signer = provider?.getSigner();
    signer
      ?.sendTransaction({
        chainId: chainId,
        to: toAddress,
        value: parseEther(money),
      })
      .then((result) => {
        console.log('web3-react send transaction::', result);
        setResult(JSON.stringify(result));
      })
      .catch((error) =>
        console.log('web3-react send transaction error::', error)
      );
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

  return (
    <div className="web3ReactSignMessage__wrap">
      <div className="web3ReactSignMessage__card">
        <div className="web3ReactSignMessage__card_title">
          <h2 className="item_label">Send Transaction</h2>
        </div>
        <div className="web3ReactSignMessage__card_content">
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

        <div className="web3ReactSignMessage__card_content">
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
          className="web3ReactSignMessage__card_content"
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '10px',
          }}
        >
          <span
            className="web3ReactSignMessage__card_title"
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
              minHeight: '300px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Web3ReactSendTransaction;
