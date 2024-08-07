import { memo } from 'react';

import { useWagmiAccount, useWagmiDisconnect } from '../hooks';

import '../css/sample.scss';

const WalletProfile = () => {
  const { disconnect } = useWagmiDisconnect();
  const { address, chainId } = useWagmiAccount();

  return (
    <div className="wagmiProfile__wrap">
      <button className="button__container" onClick={() => disconnect()}>
        Disconnect
      </button>

      <div className="wagmiProfile__account_card">
        <div className="wagmiProfile__account_card_item_wrap">
          <label className="item_label">Account</label>
          <p className="item_value">{address}</p>
        </div>
        <div className="wagmiProfile__account_card_item_wrap">
          <label className="item_label">Chain ID</label>
          <p className="item_value">{chainId}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(WalletProfile);
