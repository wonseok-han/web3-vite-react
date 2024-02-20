import { useEffect } from 'react';

import '../css/sample.scss';
import { useWagmiAccount, useWagmiBalance } from '../hooks';

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
          <p className="item_value">{data?.value?.toString() || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default WagmiBalance;
