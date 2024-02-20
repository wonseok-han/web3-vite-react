import type { Connector } from 'wagmi';

import { debounce } from 'lodash';
import { memo, useEffect } from 'react';

import WagmiBalance from './WagmiBalance';
import WalletProfile from './WalletProfile';
import { useWagmiAccount, useWagmiConnect } from '../hooks';

import '../css/sample.scss';

const WagmiConnect = () => {
  const { connect, connectors, data, error, isError, isPending, isSuccess } =
    useWagmiConnect();
  const { isConnected } = useWagmiAccount();

  const handleConnectClick = debounce((connector: Connector) => {
    connect({ connector });
  }, 300);

  useEffect(() => {
    if (isError && error) {
      console.log('Connect error::', { ...error });

      // NOTE: 연결 취소
      if (error.name === 'UserRejectedRequestError') {
        console.log('Connect stopped::', error.shortMessage);
      }
      // NOTE: 메타마스크 연결창이 이미 생성되있는 상태
      else if (error.name === 'ResourceUnavailableRpcError') {
        console.log('Connection window already exists::', error.shortMessage);
      }
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess && data) {
      console.log('Connection Succeed::', data);
    }
  }, [isSuccess, data]);

  return (
    <div className="wagmiConnect__wrap">
      <span className="wagmiConnect__title">Wagmi Connect Sample</span>
      {!isConnected && (
        <div className="wagmiConnect__connect_box">
          <div className="wagmiConnect__connect_flex_wrap">
            {connectors.map((connector) => (
              <div
                key={connector.uid}
                className="wagmiConnect__connect_item_box"
                onClick={() => handleConnectClick(connector)}
              >
                {connector.name}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={`loading_backdrop ${isPending ? 'active' : ''}`}>
        <div className="loading_bar">Connecting...</div>
      </div>

      {isConnected && <WalletProfile />}
      {isConnected && <WagmiBalance />}
    </div>
  );
};

export default memo(WagmiConnect);
