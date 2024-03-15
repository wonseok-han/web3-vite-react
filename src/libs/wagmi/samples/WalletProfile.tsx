import type { GetEnsNameErrorType, GetEnsNameReturnType } from 'viem';
import type { GetEnsAvatarErrorType, GetEnsAvatarReturnType } from 'viem/ens';

import { isEmpty } from 'lodash';
import { memo } from 'react';
import { normalize } from 'viem/ens';

import {
  useWagmiAccount,
  useWagmiDisconnect,
  useWagmiEnsAvatar,
  useWagmiEnsName,
} from '../hooks';

const WalletProfile = () => {
  const { disconnect } = useWagmiDisconnect();
  const { address, chainId } = useWagmiAccount();
  const {
    data: ensNameData,
    error: ensNameError,
    status: ensNameStatus,
  } = useWagmiEnsName({ address });
  const {
    data: ensAvatarData,
    error: ensAvatarError,
    status: ensAvatarStatus,
  } = useWagmiEnsAvatar({ name: normalize(ensNameData || '') });

  const EnsNameComponent = ({
    data,
    error,
    status,
  }: {
    data?: GetEnsNameReturnType;
    error: GetEnsNameErrorType | null;
    status: 'pending' | 'error' | 'success';
  }) => {
    return (
      <div className="wagmiProfile__account_card">
        {status === 'pending' ? (
          <div className="wagmiProfile__account_card_item_wrap pending">
            Loading ENS name
          </div>
        ) : status === 'error' ? (
          <div className="wagmiProfile__account_card_item_wrap error">
            Error fetching ENS name: {error?.message}
          </div>
        ) : (
          <div className="wagmiProfile__account_card_item_wrap">
            <label className="item_label">ENS name</label>
            <p className="item_value">{isEmpty(data) ? 'undefined' : data}</p>
          </div>
        )}
      </div>
    );
  };

  const EnsAvatarComponent = ({
    data,
    error,
    status,
  }: {
    data?: GetEnsAvatarReturnType;
    error: GetEnsAvatarErrorType | null;
    status: 'pending' | 'error' | 'success';
  }) => {
    return (
      <div className="wagmiProfile__account_card">
        {status === 'pending' ? (
          <div className="wagmiProfile__account_card_item_wrap pending">
            Loading ENS avatar
          </div>
        ) : status === 'error' ? (
          <div className="wagmiProfile__account_card_item_wrap error">
            Error fetching ENS avatar: {error?.message}
          </div>
        ) : (
          <div className="wagmiProfile__account_card_item_wrap">
            <label className="item_label">ENS avatar</label>
            <p>{isEmpty(data) ? 'undefined' : data}</p>
          </div>
        )}
      </div>
    );
  };

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

      <EnsNameComponent
        data={ensNameData}
        error={ensNameError}
        status={ensNameStatus}
      />
      <EnsAvatarComponent
        data={ensAvatarData}
        error={ensAvatarError}
        status={ensAvatarStatus}
      />
    </div>
  );
};

export default memo(WalletProfile);
