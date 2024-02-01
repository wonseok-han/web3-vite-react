import type {
  Config,
  ResolvedRegister,
  UseAccountParameters,
  UseConnectParameters,
  UseDisconnectParameters,
  UseEnsAvatarParameters,
  UseEnsNameParameters,
} from 'wagmi';
import type { GetEnsAvatarData, GetEnsNameData } from 'wagmi/query';

import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi';

export function useWagmiConnect<Context = unknown>(
  params: UseConnectParameters<Config, Context> = {}
) {
  return useConnect({ ...params });
}

export function useWagmiDisconnect<Context = unknown>(
  params: UseDisconnectParameters<Context> = {}
) {
  return useDisconnect({ ...params });
}

export function useWagmiAccount<config extends Config = Config>(
  params: UseAccountParameters<config> = {}
) {
  return useAccount({ ...params });
}

export function useWagmiEnsName<
  config extends Config = ResolvedRegister['config'],
>(params: UseEnsNameParameters<config, GetEnsNameData> = {}) {
  return useEnsName({ ...params });
}

export function useWagmiEnsAvatar<
  config extends Config = ResolvedRegister['config'],
>(params: UseEnsAvatarParameters<config, GetEnsAvatarData> = {}) {
  return useEnsAvatar({ ...params });
}
