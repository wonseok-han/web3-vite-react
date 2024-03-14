import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';

import { ConnectionOptions } from '@libs/web3-react/components/ConnectionOption';
import {
  switchNetwork,
  type ConnectionType,
} from '@libs/web3-react/connections';
import { CHAIN_INFO, INPUT_CHAIN_URL } from '@libs/web3-react/constants';

// Listen for new blocks and update the wallet
const useOnBlockUpdated = (callback: (blockNumber: number) => void) => {
  const { provider } = useWeb3React();
  useEffect(() => {
    if (!provider) {
      return;
    }
    const subscription = provider.on('block', callback);
    return () => {
      subscription.removeAllListeners();
    };
  });
};

const Web3ReactSample = () => {
  const { account, chainId, isActive } = useWeb3React();
  const [blockNumber, setBlockNumber] = useState<number>(0);
  const [connectionType, setConnectionType] = useState<ConnectionType | null>(
    null
  );

  // Listen for new blocks and update the wallet
  useOnBlockUpdated((blockNumber: number) => {
    setBlockNumber(blockNumber);
  });

  return (
    <>
      {INPUT_CHAIN_URL === '' && (
        <h2 className="error">Please set your RPC URL in config.ts</h2>
      )}
      <h3>{`Block Number: ${blockNumber + 1}`}</h3>
      <ConnectionOptions
        activeConnectionType={connectionType}
        isConnectionActive={isActive}
        onActivate={setConnectionType}
        onDeactivate={setConnectionType}
      />
      <h3>{`ChainId: ${chainId}`}</h3>
      <h3>{`Connected Account: ${account}`}</h3>
      {Object.keys(CHAIN_INFO).map((chainId) => (
        <div key={chainId}>
          <button
            onClick={() => switchNetwork(parseInt(chainId), connectionType)}
          >
            {`Switch to ${CHAIN_INFO[chainId].label}`}
          </button>
        </div>
      ))}
    </>
  );
};

export default Web3ReactSample;
