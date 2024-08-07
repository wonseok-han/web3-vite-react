import { useWeb3React } from '@web3-react/core';

import { tryDeactivateConnector } from '../connections';

import '../css/sample.scss';

const WalletProfile = () => {
  const { account, chainId, connector } = useWeb3React();

  const handleDisconnect = () => {
    tryDeactivateConnector(connector);
  };

  return (
    <div className="web3ReactProfile__wrap">
      <button className="button__container" onClick={handleDisconnect}>
        Disconnect
      </button>

      <div className="web3ReactProfile__account_card">
        <div className="web3ReactProfile__account_card_item_wrap">
          <label className="item_label">Account</label>
          <p className="item_value">{account}</p>
        </div>
        <div className="web3ReactProfile__account_card_item_wrap">
          <label className="item_label">Chain ID</label>
          <p className="item_value">{chainId}</p>
        </div>
      </div>
    </div>
  );
};

export default WalletProfile;
