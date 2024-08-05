import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';

import WalletProfile from './WalletProfile';
import Web3ReactBalance from './Web3ReactBalance';
import { ConnectionOptions } from '../components/ConnectionOption';
import { type ConnectionType } from '../connections';

import '../css/sample.scss';

const Web3React = () => {
  const { isActivating, isActive } = useWeb3React();

  const [connectionType, setConnectionType] = useState<ConnectionType | null>(
    null
  );

  return (
    <div className="web3React_wrap">
      <span className="web3React__title">Web3-React Connect Sample</span>

      {!isActive ? (
        <ConnectionOptions
          activeConnectionType={connectionType}
          isConnectionActive={isActive}
          onActivate={setConnectionType}
          onDeactivate={setConnectionType}
        />
      ) : (
        <>
          <WalletProfile />
          <Web3ReactBalance />

          {/* <div className="">
            {Object.keys(CHAIN_INFO).map((chainId) => (
              <div key={chainId}>
                <button
                  onClick={() =>
                    switchNetwork(parseInt(chainId), connectionType)
                  }
                >
                  {`Switch to ${CHAIN_INFO[chainId].label}`}
                </button>
              </div>
            ))}
          </div> */}
        </>
      )}

      <div className={`loading_backdrop ${isActivating ? 'active' : ''}`}>
        <div className="loading_bar">Connecting...</div>
      </div>
    </div>
  );
};

export default Web3React;
