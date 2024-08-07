import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';

import '../css/sample.scss';

function formatValue(value: bigint, decimals: number) {
  const divisor = 10n ** BigInt(decimals); // 18 decimals에 대한 divisor 생성
  const integerPart = value / divisor; // 정수 부분
  const fractionalPart = value % divisor; // 소수 부분

  // fractionalPart를 소수점 아래 숫자로 변환
  const fractionalString = fractionalPart.toString().padStart(decimals, '0');

  // 정수 부분과 소수 부분 결합
  return `${integerPart}.${fractionalString}`;
}

const Web3ReactBalance = () => {
  const { account, isActivating, provider } = useWeb3React();
  const [balance, setBalance] = useState('');

  const handleBalance = () => {
    if (account) {
      provider?.getBalance(account).then((result) => {
        console.log(result);
        setBalance(formatValue(result.toBigInt(), 18));
      });
    }

    return undefined;
  };

  useEffect(() => {
    handleBalance();
  }, []);

  return (
    <div className="wagmiProfile__wrap">
      <div className={`loading_backdrop ${isActivating ? 'active' : ''}`}>
        <div className="loading_bar">Loading...</div>
      </div>

      <div className="wagmiProfile__account_card">
        <div className="wagmiProfile__account_card_item_wrap">
          <label className="item_label">Balance</label>
          <p className="item_value">{balance}</p>
        </div>
      </div>
    </div>
  );
};

export default Web3ReactBalance;
