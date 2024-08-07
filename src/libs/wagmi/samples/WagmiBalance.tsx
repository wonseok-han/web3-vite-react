import { useEffect } from 'react';

import '../css/sample.scss';
import { useWagmiAccount, useWagmiBalance } from '../hooks';

function formatValue(value: bigint, decimals: number) {
  const divisor = 10n ** BigInt(decimals); // 18 decimals에 대한 divisor 생성
  const integerPart = value / divisor; // 정수 부분
  const fractionalPart = value % divisor; // 소수 부분

  // fractionalPart를 소수점 아래 숫자로 변환
  const fractionalString = fractionalPart.toString().padStart(decimals, '0');

  // 정수 부분과 소수 부분 결합
  return `${integerPart}.${fractionalString}`;
}

const WagmiBalance = () => {
  const { address, chainId } = useWagmiAccount();
  const { data, error, isError, isPending } = useWagmiBalance({
    address: address,
    chainId: chainId,
  });

  useEffect(() => {
    if (isError) {
      console.log('error::', error);
    }
  }, [isError, error]);

  return (
    <div className="wagmiProfile__wrap">
      {/* <span className="wagmiTransaction__title">Wagmi Transaction Sample</span> */}
      <div className={`loading_backdrop ${isPending ? 'active' : ''}`}>
        <div className="loading_bar">Loading...</div>
      </div>

      <div className="wagmiProfile__account_card">
        <div className="wagmiProfile__account_card_item_wrap">
          <label className="item_label">Balance</label>
          <p className="item_value">
            {`${data?.value && formatValue(data.value, data?.decimals)} ${data?.symbol}` ||
              error?.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WagmiBalance;
