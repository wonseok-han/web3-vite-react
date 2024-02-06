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
    if (status === 'pending') {
      return <div>Loading ENS name</div>;
    } else if (status === 'error') {
      return <div>Error fetching ENS name: {error?.message}</div>;
    } else {
      return <div>ENS name: {isEmpty(data) ? 'undefined' : data}</div>;
    }
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
    if (status === 'pending') {
      return <div>Loading ENS avatar</div>;
    } else if (status === 'error') {
      return <div>Error fetching ENS avatar: {error?.message}</div>;
    } else {
      return <div>ENS avatar: {isEmpty(data) ? 'undefined' : data}</div>;
    }
  };

  return (
    <>
      <div>Account: {address}</div>
      <div>Chain ID: {chainId}</div>

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

      <button onClick={() => disconnect()}>Disconnect</button>
    </>
  );
};

export default memo(WalletProfile);
