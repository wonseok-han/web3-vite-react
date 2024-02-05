import type {
  Abi,
  BlockTag,
  ContractEventName,
  ContractFunctionArgs,
  ContractFunctionName,
  FeeValuesType,
  TypedData,
  PrepareTransactionRequestParameterType as viem_PrepareTransactionRequestParameterType,
} from 'viem';
import type {
  Config,
  ResolvedRegister,
  UseAccountEffectParameters,
  UseAccountParameters,
  UseBalanceParameters,
  UseBlockNumberParameters,
  UseBlockParameters,
  UseBlockTransactionCountParameters,
  UseBytecodeParameters,
  UseCallParameters,
  UseChainIdParameters,
  UseClientParameters,
  UseConfigParameters,
  UseConnectParameters,
  UseConnectionsParameters,
  UseConnectorClientParameters,
  UseConnectorsParameters,
  UseDisconnectParameters,
  UseEnsAddressParameters,
  UseEnsAvatarParameters,
  UseEnsNameParameters,
  UseEnsResolverParameters,
  UseEnsTextParameters,
  UseEstimateFeesPerGasParameters,
  UseEstimateGasParameters,
  UseEstimateMaxPriorityFeePerGasParameters,
  UseFeeHistoryParameters,
  UseGasPriceParameters,
  UseInfiniteContractReadsParameters,
  UsePrepareTransactionRequestParameters,
  UseProofParameters,
  UsePublicClientParameters,
  UseReadContractParameters,
  UseReadContractsParameters,
  UseReconnectParameters,
  UseSendTransactionParameters,
  UseSignMessageParameters,
  UseSignTypedDataParameters,
  UseSimulateContractParameters,
  UseStorageAtParameters,
  UseSwitchAccountParameters,
  UseSwitchChainParameters,
  UseTransactionConfirmationsParameters,
  UseTransactionCountParameters,
  UseTransactionParameters,
  UseTransactionReceiptParameters,
  UseVerifyMessageParameters,
  UseVerifyTypedDataParameters,
  UseWaitForTransactionReceiptParameters,
  UseWalletClientParameters,
  UseWatchBlockNumberParameters,
  UseWatchBlocksParameters,
  UseWatchContractEventParameters,
  UseWatchPendingTransactionsParameters,
  UseWriteContractParameters,
} from 'wagmi';
import type {
  CallData,
  EstimateFeesPerGasData,
  EstimateGasData,
  EstimateMaxPriorityFeePerGasData,
  GetBalanceData,
  GetBlockData,
  GetBlockNumberData,
  GetBlockTransactionCountData,
  GetBytecodeData,
  GetConnectorClientData,
  GetEnsAddressData,
  GetEnsAvatarData,
  GetEnsNameData,
  GetEnsResolverData,
  GetEnsTextData,
  GetFeeHistoryData,
  GetGasPriceData,
  GetProofData,
  GetStorageAtData,
  GetTransactionConfirmationsData,
  GetTransactionCountData,
  GetTransactionData,
  GetTransactionReceiptData,
  GetWalletClientData,
  InfiniteReadContractsData,
  PrepareTransactionRequestData,
  ReadContractData,
  ReadContractsData,
  SimulateContractData,
  VerifyMessageData,
  VerifyTypedDataData,
  WaitForTransactionReceiptData,
} from 'wagmi/query';

import {
  useAccount,
  useAccountEffect,
  useBalance,
  useBlock,
  useBlockNumber,
  useBlockTransactionCount,
  useBytecode,
  useCall,
  useChainId,
  useClient,
  useConfig,
  useConnect,
  useConnections,
  useConnectorClient,
  useConnectors,
  useDisconnect,
  useEnsAddress,
  useEnsAvatar,
  useEnsName,
  useEnsResolver,
  useEnsText,
  useEstimateFeesPerGas,
  useEstimateGas,
  useEstimateMaxPriorityFeePerGas,
  useFeeHistory,
  useGasPrice,
  useInfiniteReadContracts,
  usePrepareTransactionRequest,
  useProof,
  usePublicClient,
  useReadContract,
  useReadContracts,
  useReconnect,
  useSendTransaction,
  useSignMessage,
  useSignTypedData,
  useSimulateContract,
  useStorageAt,
  useSwitchAccount,
  useSwitchChain,
  useTransaction,
  useTransactionConfirmations,
  useTransactionCount,
  useTransactionReceipt,
  useVerifyMessage,
  useVerifyTypedData,
  useWaitForTransactionReceipt,
  useWalletClient,
  useWatchBlockNumber,
  useWatchBlocks,
  useWatchContractEvent,
  useWatchPendingTransactions,
  useWriteContract,
} from 'wagmi';

/**
 * `useWagmiAccount` 훅은 연결된 계정 정보를 가져오기 위해 `useAccount` 훅을 사용합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터. 이를 통해 사용자 정의 설정 타입을 지정할 수 있습니다.
 * @param {UseAccountParameters<config>} params - `useAccount` 훅에 전달될 파라미터 객체. `Config` 타입을 확장한 설정 객체를 포함할 수 있습니다.
 * @returns `useAccount` 훅의 반환값을 그대로 반환합니다. 이는 계정 정보와 관련된 다양한 데이터와 함수를 포함할 수 있습니다.
 */
export function useWagmiAccount<config extends Config = Config>(
  params: UseAccountParameters<config> = {}
) {
  return useAccount({ ...params });
}

/**
 * `useWagmiAccountEffect` 훅은 연결된 계정이 변경되었을 때에 대한 사이드 이펙트를 처리하기 위해 `useAccountEffect` 훅을 래핑합니다.
 *
 * @param {UseAccountEffectParameters} params - `useAccountEffect` 훅에 전달될 파라미터 객체입니다.
 * @returns `useAccountEffect` 훅 호출 결과를 반환합니다. 이는 계정 정보 변경에 따른 사이드 이펙트를 처리하는 데 사용될 수 있는
 * 함수와 데이터를 포함할 수 있습니다.
 */
export function useWagmiAccountEffect(params: UseAccountEffectParameters = {}) {
  return useAccountEffect({ ...params });
}

/**
 * `useWagmiBalance` 훅은 사용자의 지갑 잔액을 조회하기 위해 `useBalance` 훅을 사용합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터입니다. 이를 통해 사용자 정의 설정 타입을 지정할 수 있으며,
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다.
 *
 * @param {UseBalanceParameters<config, GetBalanceData>} params - `useBalance` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 지갑 잔액 조회 시 필요한 다양한 옵션을 포함할 수 있으며, `config` 타입과 `GetBalanceData` 타입에 의해
 * 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useBalance` 훅 호출 결과를 반환합니다. 이는 지갑 잔액 조회 결과와 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체는 지갑 잔액 정보를 포함하며, 이 정보를 활용하여 사용자 인터페이스에 표시하거나 다른 처리를 할 수 있습니다.
 */
export function useWagmiBalance<
  config extends Config = ResolvedRegister['config'],
>(params: UseBalanceParameters<config, GetBalanceData> = {}) {
  return useBalance({ ...params });
}

/**
 * `useWagmiBlockNumber` 훅은 가장 최근에 본 블록 번호를 조회하기 위해 `useBlockNumber` 훅을 사용합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다.
 *
 * @template chainId - `config`에서 정의된 블록체인 네트워크의 ID 타입입니다. 이는 `config['chains'][number]['id']`에서
 * 유추됩니다. 특정 블록체인 네트워크에 대한 조회를 제한하는 데 사용됩니다.
 *
 * @param {UseBlockNumberParameters<config, chainId, GetBlockNumberData>} params - `useBlockNumber` 훅에 전달될
 * 파라미터 객체입니다. 이 객체는 블록 번호 조회 시 필요한 다양한 옵션을 포함할 수 있으며, `config`, `chainId`, 그리고
 * `GetBlockNumberData` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useBlockNumber` 훅 호출 결과를 반환합니다. 이는 현재 블록 번호와 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 블록체인의 최신 상태를 반영하거나, 특정 작업을 실행하기 위한 기준으로 사용할 수 있습니다.
 */
export function useWagmiBlockNumber<
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
>(params: UseBlockNumberParameters<config, chainId, GetBlockNumberData> = {}) {
  return useBlockNumber({ ...params });
}

/**
 * `useWagmiBlock` 훅은 블록 번호, 해시 또는 태그에서 블록에 대한 정보를 조회하기 위해 `useBlock` 훅을 사용합니다.
 *
 * @template includeTransactions - 블록 정보 조회 시 트랜잭션 정보를 포함할지 여부를 결정하는 boolean 타입입니다.
 * 기본값은 `false`로, 트랜잭션 정보를 포함하지 않습니다.
 *
 * @template blockTag - 조회할 블록의 태그를 지정하는 `BlockTag` 타입입니다. 기본값은 `'latest'`로, 가장 최근 블록을 의미합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다.
 *
 * @template chainId - `config`에서 정의된 블록체인 네트워크의 ID 타입입니다. 이는 `config['chains'][number]['id']`에서
 * 유추됩니다. 특정 블록체인 네트워크에 대한 조회를 제한하는 데 사용됩니다.
 *
 * @param {UseBlockParameters<includeTransactions, blockTag, config, chainId, GetBlockData<includeTransactions, blockTag, config, chainId>>} params
 * - `useBlock` 훅에 전달될 파라미터 객체입니다. 이 객체는 블록 정보 조회 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `includeTransactions`, `blockTag`, `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useBlock` 훅 호출 결과를 반환합니다. 이는 조회된 블록 정보와 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 블록체인의 특정 블록 상태를 반영하거나, 추가적인 분석을 위한 기준으로 사용할 수 있습니다.
 */
export function useWagmiBlock<
  includeTransactions extends boolean = false,
  blockTag extends BlockTag = 'latest',
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
>(
  params: UseBlockParameters<
    includeTransactions,
    blockTag,
    config,
    chainId,
    GetBlockData<includeTransactions, blockTag, config, chainId>
  > = {}
) {
  return useBlock({ ...params });
}

/**
 * `useWagmiBlockTransactionCount` 훅은 블록 번호, 해시 또는 태그에서 트랜잭션의 수를 조회하기 위해 `useBlockTransactionCount` 훅을 사용합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다.
 *
 * @template chainId - `config`에서 정의된 블록체인 네트워크의 ID 타입입니다. 이는 `config['chains'][number]['id']`에서
 * 유추됩니다. 특정 블록체인 네트워크에 대한 조회를 제한하는 데 사용됩니다.
 *
 * @param {UseBlockTransactionCountParameters<config, chainId, GetBlockTransactionCountData>} params
 * - `useBlockTransactionCount` 훅에 전달될 파라미터 객체입니다. 이 객체는 특정 블록의 트랜잭션 수 조회 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useBlockTransactionCount` 훅 호출 결과를 반환합니다. 이는 조회된 트랜잭션 수와 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 블록체인의 특정 블록에 대한 트랜잭션 활동을 분석하거나, 추가적인 정보를 제공하기 위한 기준으로 사용할 수 있습니다.
 */
export function useWagmiBlockTransactionCount<
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
>(
  params: UseBlockTransactionCountParameters<
    config,
    chainId,
    GetBlockTransactionCountData
  > = {}
) {
  return useBlockTransactionCount({ ...params });
}

/**
 * `useWagmiBytecode` 훅은 스마트 컨트랙트의 바이트코드를 조회하기 위해 `useBytecode` 훅을 사용합니다.
 *
 * 이 훅은 블록체인 상의 특정 주소에 배포된 스마트 컨트랙트의 바이트코드를 가져오는 데 사용됩니다. 이를 통해 개발자는
 * 스마트 컨트랙트의 배포 상태를 확인하거나, 특정 컨트랙트 기능의 존재 여부 등을 검증할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 블록체인 네트워크의 구성 정보를 포함하며,
 * 특정 네트워크에 대한 조회를 가능하게 합니다.
 *
 * @param {UseBytecodeParameters<config, GetBytecodeData>} params - `useBytecode` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 바이트코드 조회 시 필요한 다양한 옵션을 포함할 수 있으며, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useBytecode` 훅 호출 결과를 반환합니다. 이는 조회된 바이트코드와 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 스마트 컨트랙트의 바이트코드 정보를 활용할 수 있습니다.
 */
export function useWagmiBytecode<
  config extends Config = ResolvedRegister['config'],
>(params: UseBytecodeParameters<config, GetBytecodeData> = {}) {
  return useBytecode({ ...params });
}

/**
 * `useWagmiCall` 훅은 네트워크에 트랜잭션을 제출하지 않고 즉시 새 메시지 호출을 실행하기 위해 `useCall` 훅을 사용합니다.
 *
 * 이 훅은 스마트 컨트랙트의 함수를 호출하여 데이터를 조회하는 데 사용됩니다. 변경을 발생시키지 않는 읽기 전용 호출에 적합하며,
 * 트랜잭션을 생성하지 않습니다. 예를 들어, 스마트 컨트랙트의 상태 변수 값을 가져오거나, 계산 결과를 확인하는 데 사용할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 블록체인 네트워크의 구성 정보를 포함하며,
 * 특정 네트워크에 대한 호출을 가능하게 합니다.
 *
 * @param {UseCallParameters<config, CallData>} params - `useCall` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 스마트 컨트랙트 호출 시 필요한 다양한 옵션을 포함할 수 있으며, `config` 타입에 의해 결정되는 매개변수와
 * 호출할 함수의 정보(`CallData`)를 포함할 수 있습니다.
 *
 * @returns `useCall` 훅 호출 결과를 반환합니다. 이는 호출된 스마트 컨트랙트 함수의 반환값과 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 스마트 컨트랙트의 읽기 전용 데이터를 활용할 수 있습니다.
 */
export function useWagmiCall<
  config extends Config = ResolvedRegister['config'],
>(params: UseCallParameters<config, CallData> = {}) {
  return useCall({ ...params });
}

/**
 * `useWagmiChainId` 훅은 현재 연결된 블록체인 네트워크의 체인 ID를 조회하기 위해 `useChainId` 훅을 사용합니다.
 *
 * 이 훅은 애플리케이션에서 현재 사용자가 연결된 블록체인 네트워크의 식별자를 얻기 위해 사용됩니다. 체인 ID는 네트워크를 구분하는 데 중요한 역할을 하며,
 * 다양한 블록체인 네트워크 간의 상호작용을 관리하는 데 사용할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 블록체인 네트워크의 구성 정보를 포함하며,
 * 특정 네트워크에 대한 조회를 가능하게 합니다.
 *
 * @param {UseChainIdParameters<config>} params - `useChainId` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 체인 ID 조회 시 필요한 다양한 옵션을 포함할 수 있으며, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useChainId` 훅 호출 결과를 반환합니다. 이는 현재 연결된 블록체인 네트워크의 체인 ID와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 현재 네트워크 환경을 인식하고, 네트워크에 따라 다른 로직을 실행할 수 있습니다.
 */
export function useWagmiChainId<
  config extends Config = ResolvedRegister['config'],
>(params: UseChainIdParameters<config> = {}) {
  return useChainId({ ...params });
}

/**
 * `useWagmiClient` 훅은 블록체인 네트워크와의 상호작용을 관리하기 위한 Viem 클라이언트를 가져오기 위해 `useClient` 훅을 사용합니다.
 *
 * 이 훅은 애플리케이션에서 블록체인 네트워크와의 연결을 설정하고 관리하는 데 사용됩니다. 제공된 설정을 기반으로 클라이언트 인스턴스를 생성하며,
 * 이를 통해 블록체인 네트워크와의 상호작용을 수행할 수 있습니다. 클라이언트 인스턴스는 네트워크 연결, 계정 관리, 트랜잭션 전송 등 다양한 기능을 제공합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 클라이언트 인스턴스의 구성 정보를 포함하며,
 * 특정 네트워크 설정, 제공자(provider) 옵션 등을 지정할 수 있습니다.
 *
 * @template chainId - 선택적으로 특정 체인 ID를 지정할 수 있는 타입입니다. 이는 `config['chains'][number]['id']`에서 유추되며,
 * 특정 블록체인 네트워크에 대한 연결을 제한하는 데 사용될 수 있습니다. `undefined`일 경우, 기본 네트워크 설정을 사용합니다.
 *
 * @param {UseClientParameters<config, chainId>} params - `useClient` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 클라이언트 인스턴스를 초기화할 때 필요한 다양한 옵션을 포함할 수 있으며, `config`와 `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useClient` 훅 호출 결과를 반환합니다. 이는 초기화된 클라이언트 인스턴스와 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 블록체인 네트워크와의 상호작용을 수행하고, 네트워크 상태를 관리할 수 있습니다.
 */
export function useWagmiClient<
  config extends Config = ResolvedRegister['config'],
  chainId extends config['chains'][number]['id'] | number | undefined =
    | config['chains'][number]['id']
    | undefined,
>(params: UseClientParameters<config, chainId> = {}) {
  return useClient({ ...params });
}

/**
 * `useWagmiConfig` 훅은 현재 설정된 Wagmi 클라이언트의 구성을 가져오기 위해 `useConfig` 훅을 사용합니다.
 *
 * 이 훅을 통해 애플리케이션은 Wagmi 클라이언트의 현재 구성을 얻을 수 있으며, 필요에 따라 구성을 업데이트할 수 있습니다.
 * 구성은 블록체인 네트워크 연결 정보, 사용자 인증 정보, 기타 글로벌 설정 등을 포함할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @param {UseConfigParameters<config>} params - `useConfig` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 Wagmi 클라이언트의 구성을 조회하거나 수정할 때 필요한 다양한 옵션을 포함할 수 있으며,
 * `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useConfig` 훅 호출 결과를 반환합니다. 이는 현재 Wagmi 클라이언트의 구성과 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 Wagmi 클라이언트의 구성을 조회하거나, 필요에 따라 구성을 업데이트할 수 있습니다.
 */
export function useWagmiConfig<
  config extends Config = ResolvedRegister['config'],
>(params: UseConfigParameters<config> = {}) {
  return useConfig({ ...params });
}

/**
 * `useWagmiConnect` 훅은 사용자가 블록체인 네트워크에 연결할 수 있도록 도와주는 `useConnect` 훅을 래핑합니다.
 *
 * 이 훅을 사용하여 애플리케이션은 사용자가 지갑을 통해 블록체인 네트워크에 연결하고, 해당 연결을 관리할 수 있습니다.
 * 사용자의 연결 상태 변경, 지갑 선택, 연결 해제 등의 기능을 제공합니다.
 *
 * @template Context - 사용자 정의 컨텍스트 타입을 지정할 수 있는 제네릭 타입 파라미터입니다. 기본값은 `unknown`입니다.
 * 이 컨텍스트는 연결 과정에서 추가적인 정보를 제공하거나, 후속 작업에서 사용될 수 있습니다.
 *
 * @param {UseConnectParameters<Config, Context>} params - `useConnect` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 연결 설정, 사용자 정의 컨텍스트, 그리고 다른 옵션들을 포함할 수 있습니다. `Config` 타입은 연결 설정을,
 * `Context` 타입은 추가적인 컨텍스트 정보를 정의합니다.
 *
 * @returns `useConnect` 훅 호출 결과를 반환합니다. 이는 사용자의 연결 상태, 연결 및 연결 해제 함수, 현재 선택된 지갑 정보 등을 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 사용자의 블록체인 네트워크 연결을 관리하고, 사용자 인터페이스에 연결 상태를 반영할 수 있습니다.
 */
export function useWagmiConnect<Context = unknown>(
  params: UseConnectParameters<Config, Context> = {}
) {
  return useConnect({ ...params });
}

/**
 * `useWagmiConnections` 훅은 활성회된 활성된 월렛들을 가져오기 위해 `useConnections` 훅을 사용합니다.
 *
 * 이 훅은 사용자가 연결한 월렛의 목록을 반환하며, 각 월렛 연결에 대한 상세 정보를 포함할 수 있습니다.
 * 사용자가 여러 월렛을 연결한 경우, 이 훅을 통해 연결된 모든 월렛의 정보를 조회할 수 있습니다.
 *
 * @param {UseConnectionsParameters} params - `useConnections` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 월렛 연결 정보 조회 시 필요한 다양한 옵션을 포함할 수 있습니다. 현재는 특별한 매개변수를 요구하지 않으나,
 * 향후 확장성을 고려하여 파라미터 객체를 받도록 설계되었습니다.
 *
 * @returns `useConnections` 훅 호출 결과를 반환합니다. 이는 연결된 월렛 목록과 각 월렛 연결에 대한 상세 정보를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 사용자의 월렛 연결 상태를 관리하거나, 특정 월렛에 대한 작업을 수행할 수 있습니다.
 */
export function useWagmiConnections(params: UseConnectionsParameters = {}) {
  return useConnections({ ...params });
}

/**
 * `useWagmiConnectorClient` 훅은 제공된 커넥터를 위한 Viem 클라이언트를 가져오기 위해 `useConnectorClient` 훅을 사용합니다.
 *
 * 이 훅은 애플리케이션에서 특정 블록체인 네트워크에 연결된 커넥터 클라이언트의 정보를 얻기 위해 사용됩니다.
 * 커넥터 클라이언트는 블록체인 네트워크와의 상호작용을 관리하는 객체로, 네트워크 연결 상태, 사용자 계정 정보,
 * 그리고 네트워크 특정 데이터를 포함할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 블록체인 네트워크의 구성 정보를 포함하며,
 * 특정 네트워크 설정을 정의할 수 있습니다.
 *
 * @template chainId - `config`에서 정의된 블록체인 네트워크의 ID 타입입니다. 이는 `config['chains'][number]['id']`에서
 * 유추됩니다. 특정 블록체인 네트워크에 대한 조회를 제한하는 데 사용됩니다.
 *
 * @param {UseConnectorClientParameters<config, chainId, GetConnectorClientData<config, chainId>>} params
 * - `useConnectorClient` 훅에 전달될 파라미터 객체입니다. 이 객체는 커넥터 클라이언트 조회 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `config`, `chainId` 타입에 의해 결정되는 매개변수와 조회할 데이터의 형식(`GetConnectorClientData`)을 포함할 수 있습니다.
 *
 * @returns `useConnectorClient` 훅 호출 결과를 반환합니다. 이는 조회된 커넥터 클라이언트와 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 특정 블록체인 네트워크와의 연결 정보를 관리하고, 상호작용할 수 있습니다.
 */
export function useWagmiConnectorClient<
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
>(
  params: UseConnectorClientParameters<
    config,
    chainId,
    GetConnectorClientData<config, chainId>
  > & {
    query?: any;
  } = {} as any
) {
  return useConnectorClient({ ...params });
}

/**
 * `useWagmiConnectors` 훅은 사용 가능한 월렛 커넥터 목록을 조회하기 위해 `useConnectors` 훅을 사용합니다.
 *
 * 이 훅을 사용하면 애플리케이션에서 사용자가 월렛을 연결할 수 있는 모든 옵션을 표시할 수 있습니다. 각 커넥터는
 * 다른 월렛 서비스나 브라우저 확장 프로그램과의 연결을 가능하게 합니다.
 *
 * @param {UseConnectorsParameters} params - `useConnectors` 훅에 전달될 추가 파라미터 객체입니다.
 * 이 객체는 커넥터를 필터링하거나 정렬하는 등의 추가적인 옵션을 제공할 수 있습니다.
 *
 * @returns `useConnectors` 훅 호출 결과를 반환합니다. 이는 사용 가능한 모든 월렛 커넥터의 목록과 관련된 데이터를 포함합니다.
 * 반환되는 객체를 통해 애플리케이션에서 사용자에게 월렛 연결 옵션을 제공할 수 있습니다.
 */
export function useWagmiConnectors(params: UseConnectorsParameters = {}) {
  return useConnectors({ ...params });
}

/**
 * `useWagmiDisconnect` 훅은 현재 연결된 월렛을 해제하기 위해 `useDisconnect` 훅을 사용합니다.
 *
 * 이 훅을 사용하면 애플리케이션에서 사용자의 월렛 연결을 안전하게 해제할 수 있습니다. 사용자가 월렛 연결을 해제하려고 할 때,
 * 이 함수를 호출하여 연결 상태를 초기화하고, 필요한 경우 사용자 인터페이스를 업데이트할 수 있습니다.
 *
 * @template Context - 사용자 정의 컨텍스트 타입을 지정할 수 있는 제네릭 타입 파라미터입니다. 기본값은 `unknown`입니다.
 * 이 컨텍스트는 연결 해제 로직에 추가적인 정보를 제공할 수 있습니다.
 *
 * @param {UseDisconnectParameters<Context>} params - `useDisconnect` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 연결 해제 시 필요한 다양한 옵션을 포함할 수 있으며, `Context` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useDisconnect` 훅 호출 결과를 반환합니다. 이는 연결 해제 작업의 결과와 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 연결 해제 후의 상태 관리나 사용자 인터페이스 업데이트를 수행할 수 있습니다.
 */
export function useWagmiDisconnect<Context = unknown>(
  params: UseDisconnectParameters<Context> = {}
) {
  return useDisconnect({ ...params });
}

/**
 * `useWagmiEnsAddress` 훅은 Ethereum Name Service (ENS) 이름에 대응하는 주소를 조회하기 위해 `useEnsAddress` 훅을 사용합니다.
 *
 * 이 훅은 ENS 이름 (예: `example.eth`)을 주소로 해석하는 데 사용됩니다. ENS는 Ethereum 블록체인 상의 분산형 도메인 이름 시스템으로,
 * 사람이 읽을 수 있는 이름을 이더리움 주소와 같은 블록체인 자원에 매핑합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 블록체인 네트워크의 구성 정보를 포함하며,
 * 특정 네트워크 설정을 정의할 수 있습니다.
 *
 * @param {UseEnsAddressParameters<config, GetEnsAddressData>} params - `useEnsAddress` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 ENS 이름을 주소로 해석할 때 필요한 다양한 옵션을 포함할 수 있으며, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useEnsAddress` 훅 호출 결과를 반환합니다. 이는 ENS 이름에 대응하는 주소와 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 ENS 이름을 사용하여 관련 주소 정보를 조회하고, 이를 활용할 수 있습니다.
 */
export function useWagmiEnsAddress<
  config extends Config = ResolvedRegister['config'],
>(params: UseEnsAddressParameters<config, GetEnsAddressData> = {}) {
  return useEnsAddress({ ...params });
}

/**
 * `useWagmiEnsAvatar` 훅은 Ethereum Name Service (ENS) 이름에 연결된 아바타 이미지를 조회하기 위해 `useEnsAvatar` 훅을 사용합니다.
 *
 * 이 훅은 ENS 이름의 메타데이터에서 아바타 이미지의 URL을 가져오는 데 사용됩니다. 사용자의 ENS 이름에 설정된 아바타를
 * 애플리케이션 내에서 표시하고자 할 때 유용합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @param {UseEnsAvatarParameters<config, GetEnsAvatarData>} params - `useEnsAvatar` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 ENS 아바타 조회 시 필요한 다양한 옵션을 포함할 수 있으며, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useEnsAvatar` 훅 호출 결과를 반환합니다. 이는 조회된 ENS 아바타의 URL과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 사용자의 ENS 아바타 이미지를 표시하거나, 추가적인 정보를 제공하기 위한 기준으로 사용할 수 있습니다.
 */
export function useWagmiEnsAvatar<
  config extends Config = ResolvedRegister['config'],
>(params: UseEnsAvatarParameters<config, GetEnsAvatarData> = {}) {
  return useEnsAvatar({ ...params });
}

/**
 * `useWagmiEnsName` 훅은 주어진 Ethereum 주소에 연결된 Ethereum Name Service (ENS) 이름을 조회하기 위해 `useEnsName` 훅을 사용합니다.
 *
 * 이 훅은 주어진 Ethereum 주소에 대응하는 ENS 이름을 찾는 데 사용됩니다. ENS 이름은 '.eth' 도메인을 가진, 이더리움 블록체인 상의
 * 분산된 네임 서비스입니다. 사용자의 주소를 보다 읽기 쉬운 이름으로 변환하는 데 유용합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @param {UseEnsNameParameters<config, GetEnsNameData>} params - `useEnsName` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 ENS 이름 조회 시 필요한 다양한 옵션을 포함할 수 있으며, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useEnsName` 훅 호출 결과를 반환합니다. 이는 조회된 ENS 이름과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 사용자의 ENS 이름을 표시하거나, 추가적인 정보를 제공하기 위한 기준으로 사용할 수 있습니다.
 */
export function useWagmiEnsName<
  config extends Config = ResolvedRegister['config'],
>(params: UseEnsNameParameters<config, GetEnsNameData> = {}) {
  return useEnsName({ ...params });
}

/**
 * `useWagmiEnsResolver` 훅은 주어진 Ethereum Name Service (ENS) 이름에 대한 리졸버 정보를 조회하기 위해 `useEnsResolver` 훅을 사용합니다.
 *
 * ENS 리졸버는 ENS 이름을 실제 Ethereum 주소나 다른 리소스로 매핑하는 역할을 합니다. 이 훅을 사용하여 특정 ENS 이름에 대한 리졸버 설정을
 * 조회할 수 있으며, 이를 통해 ENS 이름이 어떤 주소나 리소스를 가리키는지 확인할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @param {UseEnsResolverParameters<config, GetEnsResolverData>} params - `useEnsResolver` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 ENS 리졸버 조회 시 필요한 다양한 옵션을 포함할 수 있으며, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useEnsResolver` 훅 호출 결과를 반환합니다. 이는 조회된 ENS 리졸버 정보와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 ENS 이름의 리졸버 설정을 확인하거나, 추가적인 정보를 제공하기 위한 기준으로 사용할 수 있습니다.
 */
export function useWagmiEnsResolver<
  config extends Config = ResolvedRegister['config'],
>(params: UseEnsResolverParameters<config, GetEnsResolverData> = {}) {
  return useEnsResolver({ ...params });
}

/**
 * `useWagmiEnsText` 훅은 주어진 Ethereum Name Service (ENS) 이름에 연결된 텍스트 레코드를 조회하기 위해 `useEnsText` 훅을 사용합니다.
 *
 * ENS 텍스트 레코드는 ENS 이름에 대한 추가 정보를 제공하는 데 사용됩니다. 이 정보는 이메일 주소, 웹사이트 URL, 소셜 미디어 핸들 등 다양한 형태가 될 수 있습니다.
 * 이 훅을 사용하여 특정 ENS 이름에 설정된 텍스트 레코드의 값을 조회할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @param {UseEnsTextParameters<config, GetEnsTextData>} params - `useEnsText` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 ENS 텍스트 레코드 조회 시 필요한 다양한 옵션을 포함할 수 있으며, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useEnsText` 훅 호출 결과를 반환합니다. 이는 조회된 ENS 텍스트 레코드의 값과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 ENS 이름에 설정된 추가 정보를 표시하거나, 사용자에게 더 많은 컨텍스트를 제공할 수 있습니다.
 */
export function useWagmiEnsText<
  config extends Config = ResolvedRegister['config'],
>(params: UseEnsTextParameters<config, GetEnsTextData> = {}) {
  return useEnsText({ ...params });
}

/**
 * `useWagmiFeeHistory` 훅은 지정된 과거 수수료 이력을 조회하기 위해 `useFeeHistory` 훅을 사용합니다.
 *
 * 이 훅은 네트워크의 가스 수수료 변동성을 분석하거나, 트랜잭션 수수료를 예측하는 데 유용한 데이터를 제공합니다.
 * 사용자는 이 정보를 바탕으로 트랜잭션을 보낼 최적의 시기를 결정할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - `config`에서 정의된 블록체인 네트워크의 ID 타입입니다. 이는 `config['chains'][number]['id']`에서
 * 유추됩니다. 특정 블록체인 네트워크에 대한 수수료 이력 조회를 제한하는 데 사용됩니다.
 *
 * @param {UseFeeHistoryParameters<config, chainId, GetFeeHistoryData>} params - `useFeeHistory` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 수수료 이력 조회 시 필요한 다양한 옵션을 포함할 수 있으며, `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useFeeHistory` 훅 호출 결과를 반환합니다. 이는 조회된 수수료 이력과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 네트워크의 수수료 변동성을 분석하거나, 트랜잭션 수수료를 예측하는 데 사용할 수 있습니다.
 */
export function useWagmiFeeHistory<
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
>(params: UseFeeHistoryParameters<config, chainId, GetFeeHistoryData> = {}) {
  return useFeeHistory({ ...params });
}

/**
 * `useWagmiProof` 훅은 Merkle-proof를 포함해 지정된 계정의 계정과 저장값을 조회하기 위해 `useProof` 훅을 사용합니다.
 *
 * 이 훅은 블록체인 상의 특정 데이터나 상태에 대한 증명을 생성하거나 검증할 때 사용됩니다. 예를 들어, 머클 증명(Merkle Proof)과 같은
 * 암호학적 증명을 통해 사용자가 특정 조건을 만족하는지 확인할 수 있습니다. 이는 토큰 보유 여부, 특정 조건의 충족 여부 등 다양한
 * 상황에서 활용될 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @param {UseProofParameters<config, GetProofData>} params - `useProof` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 증명 조회 시 필요한 다양한 옵션을 포함할 수 있으며, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useProof` 훅 호출 결과를 반환합니다. 이는 조회된 증명 데이터와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 사용자의 특정 조건 충족 여부를 검증하거나, 추가적인 정보를 제공하기 위한 기준으로 사용할 수 있습니다.
 */
export function useWagmiProof<
  config extends Config = ResolvedRegister['config'],
>(params: UseProofParameters<config, GetProofData> = {}) {
  return useProof({ ...params });
}

/**
 * `useWagmiPublicClient` 훅은 Viem publicClient 인스턴스를 가져오기 위해 `usePublicClient` 훅을 사용합니다.
 *
 * 이 훅은 블록체인 네트워크와의 상호작용을 위한 공개적으로 접근 가능한 클라이언트 인스턴스를 생성합니다. 사용자 인증이 필요하지 않은
 * 읽기 전용 쿼리나 트랜잭션 전송 등의 작업에 적합합니다. 예를 들어, 스마트 컨트랙트의 데이터를 조회하거나, 네트워크 상태를 확인하는 데
 * 사용될 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - `config`에서 정의된 블록체인 네트워크의 ID 타입입니다. 이는 `config['chains'][number]['id']` 또는
 * 숫자, 혹은 `undefined`일 수 있습니다. 특정 블록체인 네트워크에 대한 공개 클라이언트 접근을 제한하는 데 사용됩니다.
 *
 * @param {UsePublicClientParameters<config, chainId>} params - `usePublicClient` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 공개 클라이언트 생성 시 필요한 다양한 옵션을 포함할 수 있으며, `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `usePublicClient` 훅 호출 결과를 반환합니다. 이는 생성된 공개 클라이언트 인스턴스와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 블록체인 네트워크와의 상호작용을 수행할 수 있습니다.
 */
export function useWagmiPublicClient<
  config extends Config = ResolvedRegister['config'],
  chainId extends config['chains'][number]['id'] | number | undefined =
    | config['chains'][number]['id']
    | undefined,
>(params: UsePublicClientParameters<config, chainId> = {}) {
  return usePublicClient({ ...params });
}

/**
 * `useWagmiEstimateFeesPerGas` 훅은 다음 블록에 포함될 가능성이 있는 거래에 대한 가스당 수수료(wei)에 대한 추정치를 가져오기 위해 `useEstimateFeesPerGas` 훅을 사용합니다.
 *
 * 이 훅은 트랜잭션을 전송하기 전에 필요한 가스 수수료의 추정치를 제공합니다. EIP-1559 트랜잭션 타입을 지원하는 네트워크의 경우,
 * base fee, priority fee 등의 정보를 포함할 수 있습니다. 이 정보는 사용자가 트랜잭션 수수료를 적절히 설정하는 데 도움을 줍니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template type - 가스 수수료 추정치를 조회할 때 사용할 수수료 값의 타입을 지정하는 `FeeValuesType`입니다.
 * 기본값으로는 `'eip1559'`가 사용됩니다. 이는 EIP-1559 트랜잭션 타입에 대한 수수료 정보를 조회하는 데 사용됩니다.
 *
 * @param {UseEstimateFeesPerGasParameters<type, config, EstimateFeesPerGasData<type>>} params - `useEstimateFeesPerGas` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 가스 수수료 추정 시 필요한 다양한 옵션을 포함할 수 있으며, `type`, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useEstimateFeesPerGas` 훅 호출 결과를 반환합니다. 이는 추정된 가스 수수료 정보와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 트랜잭션 수수료를 적절히 설정하거나, 사용자에게 수수료 정보를 제공하는 데 사용할 수 있습니다.
 */
export function useWagmiEstimateFeesPerGas<
  config extends Config = ResolvedRegister['config'],
  type extends FeeValuesType = 'eip1559',
>(
  params: UseEstimateFeesPerGasParameters<
    type,
    config,
    EstimateFeesPerGasData<type>
  > = {}
) {
  return useEstimateFeesPerGas({ ...params });
}

/**
 * `useWagmiEstimateGas` 훅은 네트워크에 제출하지 않고 거래를 완료하는데 필요한 가스 추정치를 조회하기 위해 `useEstimateGas` 훅을 사용합니다.
 *
 * 이 훅은 트랜잭션을 실행하기 전에 필요한 가스 양의 추정치를 제공합니다. 이를 통해 사용자는 트랜잭션 수수료를 적절히 설정하고,
 * 트랜잭션이 성공적으로 실행될 수 있는 충분한 가스 한도를 지정할 수 있습니다. 가스 추정은 네트워크 상황과 트랜잭션의 복잡성에 따라
 * 변동될 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - `config`에서 정의된 블록체인 네트워크의 ID 타입입니다. 이는 `config['chains'][number]['id']` 또는
 * `undefined`일 수 있습니다. 특정 블록체인 네트워크에 대한 가스 추정을 제한하는 데 사용됩니다.
 *
 * @param {UseEstimateGasParameters<config, chainId, EstimateGasData>?} params - `useEstimateGas` 훅에 전달될 선택적 파라미터 객체입니다.
 * 이 객체는 가스 추정 시 필요한 다양한 옵션을 포함할 수 있으며, `config`, `chainId` 타입에 의해 결정되는 매개변수와
 * 트랜잭션 세부 정보를 포함할 수 있습니다.
 *
 * @returns `useEstimateGas` 훅 호출 결과를 반환합니다. 이는 추정된 가스 소모량과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 트랜잭션 수수료를 적절히 설정하거나, 사용자에게 가스 소모량 추정치를 제공하는 데 사용할 수 있습니다.
 */
export function useWagmiEstimateGas<
  config extends Config = ResolvedRegister['config'],
  chainId extends config['chains'][number]['id'] | undefined = undefined,
>(params?: UseEstimateGasParameters<config, chainId, EstimateGasData>) {
  return useEstimateGas(params && { ...params });
}

/**
 * `useWagmiEstimateMaxPriorityFeePerGas` 훅은 다음 블록에 포함될 가능성이 있는 거래에 대해 가스당 수수료(wei)에 대한 추정치를 가져오기 위해 `useEstimateMaxPriorityFeePerGas` 훅을 사용합니다.
 *
 * 이 훅은 EIP-1559 트랜잭션 메커니즘을 지원하는 네트워크에서, 미너들이 트랜잭션을 우선적으로 처리하기 위해 기꺼이 받아들일 것으로 예상되는 최대 수수료를 추정합니다. 이 추정치는 트랜잭션의 처리 속도를 가속화하기 위해 사용자가 지불할 수 있는 추가 수수료의 상한선을 제공합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @param {UseEstimateMaxPriorityFeePerGasParameters<config, EstimateMaxPriorityFeePerGasData>} params - `useEstimateMaxPriorityFeePerGas` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 최대 우선 순위 수수료 추정 시 필요한 다양한 옵션을 포함할 수 있으며, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useEstimateMaxPriorityFeePerGas` 훅 호출 결과를 반환합니다. 이는 추정된 최대 우선 순위 수수료와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 트랜잭션의 처리 속도를 가속화하기 위한 수수료 설정에 대한 결정을 내릴 수 있습니다.
 */
export function useWagmiEstimateMaxPriorityFeePerGas<
  config extends Config = ResolvedRegister['config'],
>(
  params: UseEstimateMaxPriorityFeePerGasParameters<
    config,
    EstimateMaxPriorityFeePerGasData
  > = {}
) {
  return useEstimateMaxPriorityFeePerGas({ ...params });
}

/**
 * `useWagmiGasPrice` 훅은 가스의 현재 가격(wei)를 가져오기 위해 `useGasPrice` 훅을 사용합니다.
 *
 * 이 훅은 네트워크의 현재 가스 가격을 동적으로 조회하여, 트랜잭션 수수료를 적절하게 설정하는 데 도움을 줍니다. 가스 가격은 네트워크의
 * 혼잡도에 따라 변동될 수 있으며, 이를 통해 사용자는 트랜잭션의 처리 속도와 비용 사이의 균형을 맞출 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - `config`에서 정의된 블록체인 네트워크의 ID 타입입니다. 이는 `config['chains'][number]['id']`로,
 * 특정 블록체인 네트워크에 대한 가스 가격 조회를 제한하는 데 사용됩니다.
 *
 * @param {UseGasPriceParameters<config, chainId, GetGasPriceData>} params - `useGasPrice` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 가스 가격 조회 시 필요한 다양한 옵션을 포함할 수 있으며, `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useGasPrice` 훅 호출 결과를 반환합니다. 이는 조회된 현재 가스 가격과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 트랜잭션 수수료를 적절히 설정하거나, 사용자에게 현재 네트워크의 가스 가격 정보를 제공하는 데 사용할 수 있습니다.
 */
export function useWagmiGasPrice<
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
>(params: UseGasPriceParameters<config, chainId, GetGasPriceData> = {}) {
  return useGasPrice({ ...params });
}

/**
 * `useWagmiInfiniteReadContracts` 훅은 Infinite Scrolling / More 가져오기를 위해 `useInfiniteReadContracts` 훅을 사용합니다.
 *
 * 이 훅은 페이지네이션 또는 무한 스크롤 UI 구성 요소와 함께 사용될 수 있으며, 대량의 컨트랙트 데이터를 효율적으로 로드하고 표시하는 데 유용합니다.
 * 사용자는 스크롤을 내릴 때마다 추가 데이터를 요청할 수 있으며, 이 훅은 해당 요청을 관리합니다.
 *
 * @template contracts - 조회할 스마트 컨트랙트의 배열입니다. 각 항목은 컨트랙트 주소, ABI, 메소드 이름, 메소드 인자 등을 포함할 수 있는 객체입니다.
 *
 * @template allowFailure - 개별 컨트랙트 읽기 연산이 실패해도 전체 쿼리가 실패하지 않도록 허용할지 여부를 지정합니다. 기본값은 `true`입니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template pageParam - 페이지네이션 또는 추가 데이터 로드를 위한 페이지 매개변수입니다. 이는 다음 페이지의 데이터를 요청하는 데 사용됩니다.
 *
 * @param {UseInfiniteContractReadsParameters<contracts, allowFailure, config, pageParam, InfiniteReadContractsData<contracts, allowFailure>>} params
 * - `useInfiniteReadContracts` 훅에 전달될 파라미터 객체입니다. 이 객체는 무한 읽기 연산 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `contracts`, `allowFailure`, `config`, `pageParam` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useInfiniteReadContracts` 훅 호출 결과를 반환합니다. 이는 조회된 컨트랙트 데이터와 관련된 데이터를 포함할 수 있으며,
 * 추가 데이터 로드를 위한 함수와 상태 관리 정보를 제공합니다.
 */
export function useWagmiInfiniteReadContracts<
  const contracts extends ReadonlyArray<unknown>,
  allowFailure extends boolean = true,
  config extends Config = ResolvedRegister['config'],
  pageParam = unknown,
>(
  params: UseInfiniteContractReadsParameters<
    contracts,
    allowFailure,
    config,
    pageParam,
    InfiniteReadContractsData<contracts, allowFailure>
  >
) {
  return useInfiniteReadContracts({ ...params });
}

/**
 * `useWagmiReadContract` 훅은 스마트 컨트랙트의 읽기 전용 함수를 호출하여 데이터를 조회하기 위해 `useReadContract` 훅을 사용합니다.
 *
 * 이 훅은 블록체인 상의 스마트 컨트랙트에서 읽기 전용(`pure` 또는 `view`) 함수를 호출하고, 그 결과를 반환합니다.
 * 이를 통해 컨트랙트의 상태를 조회하거나, 계산된 값을 얻을 수 있습니다. 트랜잭션을 생성하지 않으므로 가스 비용이 발생하지 않습니다.
 *
 * @template abi - 호출할 스마트 컨트랙트의 ABI(애플리케이션 바이너리 인터페이스)입니다. `Abi` 타입 또는 읽기 전용 배열로 제공됩니다.
 *
 * @template functionName - 호출할 컨트랙트 함수의 이름입니다. `abi`에 정의된 `pure` 또는 `view` 타입의 함수 이름이어야 합니다.
 *
 * @template args - 함수 호출 시 전달할 인자의 배열입니다. `functionName`에 해당하는 함수의 시그니처에 맞춰 인자를 제공해야 합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @param {UseReadContractParameters<abi, functionName, args, config, ReadContractData<abi, functionName, args>>} params
 * - `useReadContract` 훅에 전달될 파라미터 객체입니다. 이 객체는 컨트랙트 읽기 연산 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `abi`, `functionName`, `args`, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useReadContract` 훅 호출 결과를 반환합니다. 이는 호출된 컨트랙트 함수의 반환값과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 스마트 컨트랙트의 읽기 전용 데이터를 활용할 수 있습니다.
 */
export function useWagmiReadContract<
  const abi extends Abi | ReadonlyArray<unknown>,
  functionName extends ContractFunctionName<abi, 'pure' | 'view'>,
  args extends ContractFunctionArgs<abi, 'pure' | 'view', functionName>,
  config extends Config = ResolvedRegister['config'],
>(
  params: UseReadContractParameters<
    abi,
    functionName,
    args,
    config,
    ReadContractData<abi, functionName, args>
  > = {} as any
) {
  return useReadContract({ ...params });
}

/**
 * `useWagmiPrepareTransactionRequest` 훅은 nonce, 가스 한도, 수수료 값 및 거래 유형을 채워 서명을 위한 거래 요청을 준비하기 위해 `usePrepareTransactionRequest` 훅을 사용합니다.
 *
 * 이 훅은 사용자가 지정한 파라미터에 기반하여 트랜잭션 요청을 준비합니다. 이 과정에는 가스 비용 추정, nonce 설정,
 * 트랜잭션 데이터 서명 준비 등이 포함될 수 있습니다. 준비된 트랜잭션 요청은 네트워크에 전송하기 전에 필요한 모든 정보를 포함합니다.
 *
 * @template parameterType - 트랜잭션 요청을 준비하기 위해 필요한 파라미터의 타입입니다. 이는 특정 트랜잭션 유형에 필요한
 * 정보를 정의합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - `config`에서 정의된 블록체인 네트워크의 ID 타입입니다. 이는 `config['chains'][number]['id']` 또는
 * `undefined`일 수 있습니다. 특정 블록체인 네트워크에 대한 트랜잭션 요청을 준비하는 데 사용됩니다.
 *
 * @param {UsePrepareTransactionRequestParameters<parameterType, config, chainId, PrepareTransactionRequestData<parameterType, config, chainId>>} params
 * - `usePrepareTransactionRequest` 훅에 전달될 파라미터 객체입니다. 이 객체는 트랜잭션 요청을 준비하는 데 필요한 다양한 옵션을 포함할 수 있으며,
 * `parameterType`, `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `usePrepareTransactionRequest` 훅 호출 결과를 반환합니다. 이는 준비된 트랜잭션 요청과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 트랜잭션을 실행할 준비를 완료하고, 사용자에게 트랜잭션 실행을 위한 최종 확인을 요청할 수 있습니다.
 */
export function useWagmiPrepareTransactionRequest<
  parameterType extends viem_PrepareTransactionRequestParameterType,
  config extends Config = ResolvedRegister['config'],
  chainId extends config['chains'][number]['id'] | undefined = undefined,
>(
  params: UsePrepareTransactionRequestParameters<
    parameterType,
    config,
    chainId,
    PrepareTransactionRequestData<parameterType, config, chainId>
  > = {} as any
) {
  return usePrepareTransactionRequest({ ...params });
}

/**
 * `useWagmiReadContracts` 훅은 여러 스마트 컨트랙트에서 여러 읽기 메서드를 호출하기 위해 `useReadContracts` 훅을 사용합니다.
 *
 * 이 훅은 주로 여러 컨트랙트에서 데이터를 효율적으로 읽어와야 할 때 사용됩니다. 예를 들어, 다양한 토큰의 잔액을 한 번에 조회하거나,
 * 여러 NFT 컨트랙트에서 메타데이터를 가져올 때 유용합니다. `allowFailure` 옵션을 통해 개별 컨트랙트 호출 실패가 전체 쿼리 실패로 이어지지 않도록
 * 관리할 수 있습니다.
 *
 * @template contracts - 조회할 스마트 컨트랙트의 배열입니다. 각 항목은 컨트랙트 주소, ABI, 메소드 이름, 메소드 인자 등을 포함할 수 있는 객체입니다.
 *
 * @template allowFailure - 개별 컨트랙트 읽기 연산이 실패해도 전체 쿼리가 실패하지 않도록 허용할지 여부를 지정합니다. 기본값은 `true`입니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @param {UseReadContractsParameters<contracts, allowFailure, config, ReadContractsData<contracts, allowFailure>>} params
 * - `useReadContracts` 훅에 전달될 파라미터 객체입니다. 이 객체는 컨트랙트 읽기 연산 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `contracts`, `allowFailure`, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useReadContracts` 훅 호출 결과를 반환합니다. 이는 호출된 컨트랙트 함수들의 반환값과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 여러 컨트랙트의 데이터를 효율적으로 관리하고 활용할 수 있습니다.
 */
export function useWagmiReadContracts<
  const contracts extends ReadonlyArray<unknown>,
  allowFailure extends boolean = true,
  config extends Config = ResolvedRegister['config'],
>(
  params: UseReadContractsParameters<
    contracts,
    allowFailure,
    config,
    ReadContractsData<contracts, allowFailure>
  > = {}
) {
  return useReadContracts({ ...params });
}

/**
 * `useWagmiReconnect` 훅은 커넥터를 다시 연결하기 위해 사용됩니다. `useReconnect` 훅을 사용합니다.
 *
 * 이 훅은 사용자가 페이지를 새로 고침하거나 애플리케이션을 재방문했을 때, 이전 세션에서 연결된 월렛이나 계정에
 * 자동으로 재연결하는 기능을 제공합니다. 이를 통해 사용자 경험을 개선하고, 월렛 연결 과정을 간소화할 수 있습니다.
 *
 * @template context - 재연결 과정에서 사용될 수 있는 추가적인 컨텍스트 정보를 정의하는 타입입니다. 이는 선택적으로 제공될 수 있으며,
 * 특정 사용 사례에 맞게 커스터마이징할 수 있습니다.
 *
 * @param {UseReconnectParameters<context>} params - `useReconnect` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 재연결 시도 시 필요한 다양한 옵션을 포함할 수 있으며, `context` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useReconnect` 훅 호출 결과를 반환합니다. 이는 재연결 시도의 성공 여부와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 사용자의 재연결 과정을 관리하고, 필요한 경우 추가적인 사용자 인터랙션을 유도할 수 있습니다.
 */
export function useWagmiReconnect<context = unknown>(
  params: UseReconnectParameters<context> = {}
) {
  return useReconnect({ ...params });
}

/**
 * `useWagmiSendTransaction` 훅은 트랜잭션을 생성, 서명 및 네트워크로 전송하기 위해 `useSendTransaction` 훅을 사용합니다.
 *
 * 이 훅은 사용자가 지정한 트랜잭션 데이터를 바탕으로 블록체인 네트워크에 트랜잭션을 전송하고, 전송 결과를 관리합니다.
 * 트랜잭션 전송 과정에서 발생할 수 있는 다양한 상태와 오류를 처리하며, 트랜잭션의 성공적인 처리 여부를 추적합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template context - 트랜잭션 처리 과정에서 사용될 수 있는 추가적인 컨텍스트 정보를 지정하는 타입입니다.
 *
 * @param {UseSendTransactionParameters<config, context>} params - `useSendTransaction` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 트랜잭션 전송 시 필요한 다양한 옵션을 포함할 수 있으며, `config`, `context` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useSendTransaction` 훅 호출 결과를 반환합니다. 이는 트랜잭션 전송 과정과 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 트랜잭션의 전송 상태를 관리하고, 사용자에게 트랜잭션의 처리 결과를 제공할 수 있습니다.
 */
export function useWagmiSendTransaction<
  config extends Config = ResolvedRegister['config'],
  context = unknown,
>(params: UseSendTransactionParameters<config, context> = {}) {
  return useSendTransaction({ ...params });
}

/**
 * `useWagmiSignMessage` 훅은 메시지 서명을 위해 `useSignMessage` 훅을 사용합니다.
 *
 * 이 훅은 암호화폐 지갑을 사용하여 메시지에 서명하는 과정을 단순화합니다. 사용자는 이를 통해 자신의 지갑 주소의 소유권을 증명하거나,
 * 특정 작업에 대한 승인을 나타내는 데 사용할 수 있는 서명을 생성할 수 있습니다. 서명 과정은 블록체인 네트워크에 트랜잭션을 전송하지 않으므로,
 * 가스 비용이 발생하지 않습니다.
 *
 * @template context - 서명 과정에서 사용될 수 있는 추가적인 컨텍스트 정보를 지정하는 타입입니다.
 *
 * @param {UseSignMessageParameters<context>} params - `useSignMessage` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 메시지 서명 시 필요한 다양한 옵션을 포함할 수 있으며, `context` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useSignMessage` 훅 호출 결과를 반환합니다. 이는 생성된 디지털 서명과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 사용자의 서명을 관리하고, 서명된 메시지를 다른 시스템이나 서비스와 공유할 수 있습니다.
 */
export function useWagmiSignMessage<context = unknown>(
  params: UseSignMessageParameters<context> = {}
) {
  return useSignMessage({ ...params });
}

/**
 * `useWagmiSignTypedData` 훅은 EIP-712 표준을 따르는 타입화된 데이터에 대한 디지털 서명을 생성하기 위해 `useSignTypedData` 훅을 사용합니다.
 *
 * 이 훅은 사용자가 구조화된 데이터에 서명할 수 있도록 지원하며, 서명된 데이터는 스마트 컨트랙트와의 상호작용이나,
 * 오프체인에서의 인증 목적 등에 사용될 수 있습니다. EIP-712 표준은 사용자가 서명하는 데이터의 구조를 명확하게 이해할 수 있도록
 * 하여, 보다 안전한 디지털 서명 경험을 제공합니다.
 *
 * @template context - 서명 과정에서 사용될 수 있는 추가적인 컨텍스트 정보를 지정하는 타입입니다.
 *
 * @param {UseSignTypedDataParameters<context>} params - `useSignTypedData` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 타입화된 데이터 서명 시 필요한 다양한 옵션을 포함할 수 있으며, `context` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useSignTypedData` 훅 호출 결과를 반환합니다. 이는 생성된 디지털 서명과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 사용자의 서명을 관리하고, 서명된 타입화된 데이터를 다른 시스템이나 서비스와 공유할 수 있습니다.
 */
export function useWagmiSignTypedData<context = unknown>(
  params: UseSignTypedDataParameters<context> = {}
) {
  return useSignTypedData({ ...params });
}

/**
 * `useWagmiSimulateContract` 훅은 스마트 컨트랙트 상호 작용을 시뮬레이션/검증 하기 위해 `useSimulateContract` 훅을 사용합니다.
 *
 * 이 훅은 실제로 트랜잭션을 블록체인에 전송하지 않고, 주어진 함수 호출이 어떤 결과를 반환할지 또는 어떤 상태 변화를 일으킬지를
 * 예측합니다. 이는 특히 사용자에게 트랜잭션 수행 전 예상 결과를 보여주거나, 트랜잭션 실행에 따른 가스 비용을 추정하는 데 유용합니다.
 *
 * @template abi - 시뮬레이션할 스마트 컨트랙트의 ABI(애플리케이션 바이너리 인터페이스)입니다.
 *
 * @template functionName - 호출하려는 컨트랙트 함수의 이름입니다. 이 함수는 `nonpayable` 또는 `payable` 타입이어야 합니다.
 *
 * @template args - 함수 호출 시 전달할 인자의 배열입니다. `functionName`에 해당하는 함수의 시그니처에 맞춰 인자를 제공해야 합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - 시뮬레이션을 수행할 블록체인 네트워크의 ID입니다. 이는 `config['chains'][number]['id']` 또는 `undefined`일 수 있습니다.
 *
 * @param {UseSimulateContractParameters<abi, functionName, args, config, chainId, SimulateContractData<abi, functionName, args, config, chainId>>} params
 * - `useSimulateContract` 훅에 전달될 파라미터 객체입니다. 이 객체는 컨트랙트 시뮬레이션 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `abi`, `functionName`, `args`, `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useSimulateContract` 훅 호출 결과를 반환합니다. 이는 시뮬레이션된 컨트랙트 함수 호출의 결과와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 사용자에게 예상되는 트랜잭션 결과를 보여주거나, 추가적인 분석을 위한 데이터를 활용할 수 있습니다.
 */
export function useWagmiSimulateContract<
  const abi extends Abi | ReadonlyArray<unknown>,
  functionName extends ContractFunctionName<abi, 'nonpayable' | 'payable'>,
  args extends ContractFunctionArgs<
    abi,
    'nonpayable' | 'payable',
    functionName
  >,
  config extends Config = ResolvedRegister['config'],
  chainId extends config['chains'][number]['id'] | undefined = undefined,
>(
  params: UseSimulateContractParameters<
    abi,
    functionName,
    args,
    config,
    chainId,
    SimulateContractData<abi, functionName, args, config, chainId>
  > = {} as any
) {
  return useSimulateContract({ ...params });
}

/**
 * `useWagmiStorageAt` 훅은 지정된 주소의 저장소 슬롯에서 값을 반환하기 위해 `useStorageAt` 훅을 사용합니다.
 *
 * 이 훅은 스마트 컨트랙트나 계정의 저장소에서 특정 위치의 데이터를 읽어오는 데 사용할 수 있습니다. 이를 통해 개발자는
 * 블록체인 상의 특정 데이터를 직접 조회할 수 있으며, 이 데이터는 컨트랙트의 상태나 계정의 잔액 등 다양한 정보를 포함할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @param {UseStorageAtParameters<config, GetStorageAtData>} params - `useStorageAt` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 저장소 데이터 조회 시 필요한 다양한 옵션을 포함할 수 있으며, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useStorageAt` 훅 호출 결과를 반환합니다. 이는 조회된 저장소 데이터와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 블록체인 상의 특정 데이터를 활용할 수 있습니다.
 */
export function useWagmiStorageAt<
  config extends Config = ResolvedRegister['config'],
>(params: UseStorageAtParameters<config, GetStorageAtData> = {}) {
  return useStorageAt({ ...params });
}

/**
 * `useWagmiSwitchAccount` 훅은 사용자가 연결된 지갑 내에서 다른 계정으로 전환할 수 있도록 하기 위해 `useSwitchAccount` 훅을 사용합니다.
 *
 * 이 훅은 특히 다중 계정을 지원하는 지갑에서 유용하게 사용될 수 있으며, 사용자가 애플리케이션 내에서 쉽게 계정을 전환하여
 * 다른 주소로부터의 작업을 수행할 수 있게 합니다. 계정 전환 요청은 지갑 인터페이스를 통해 사용자에게 전달되며,
 * 사용자의 승인을 받아 처리됩니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template context - 계정 전환 과정에서 사용될 수 있는 추가적인 컨텍스트 정보를 지정하는 타입입니다.
 *
 * @param {UseSwitchAccountParameters<config, context>} params - `useSwitchAccount` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 계정 전환 시 필요한 다양한 옵션을 포함할 수 있으며, `config`, `context` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useSwitchAccount` 훅 호출 결과를 반환합니다. 이는 계정 전환 요청의 처리 상태와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 사용자의 계정 전환 요청을 관리하고, 전환 과정의 성공 여부를 추적할 수 있습니다.
 */
export function useWagmiSwitchAccount<
  config extends Config = ResolvedRegister['config'],
  context = unknown,
>(params: UseSwitchAccountParameters<config, context> = {}) {
  return useSwitchAccount({ ...params });
}

/**
 * `useWagmiSwitchChain` 훅은 커넥터 또는 체인을 전환하기 위해 `useSwitchChain` 훅을 사용합니다.
 *
 * 이 훅은 사용자의 지갑이 여러 블록체인 네트워크를 지원할 경우, 애플리케이션 내에서 사용자가 현재 선택한 네트워크를
 * 쉽게 변경할 수 있도록 도와줍니다. 네트워크 전환은 사용자의 지갑 인터페이스를 통해 이루어지며, 사용자는 이 훅을 통해
 * 제공된 네트워크 옵션 중에서 선택할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template context - 네트워크 전환 과정에서 사용될 수 있는 추가적인 컨텍스트 정보를 지정하는 타입입니다.
 *
 * @param {UseSwitchChainParameters<config, context>} params - `useSwitchChain` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 네트워크 전환 시 필요한 다양한 옵션을 포함할 수 있으며, `config`, `context` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useSwitchChain` 훅 호출 결과를 반환합니다. 이는 네트워크 전환 과정과 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 사용자가 원활하게 네트워크를 전환할 수 있도록 지원할 수 있습니다.
 */
export function useWagmiSwitchChain<
  config extends Config = ResolvedRegister['config'],
  context = unknown,
>(params: UseSwitchChainParameters<config, context> = {}) {
  return useSwitchChain({ ...params });
}

/**
 * `useWagmiTransaction` 훅은 해시 또는 블록 식별자가 지정된 트랜잭션을 조회하기 위해 `useTransaction` 훅을 사용합니다.
 *
 * 이 훅은 트랜잭션 해시를 기반으로 해당 트랜잭션의 상태, 가스 사용량, 트랜잭션에 포함된 값, 수수료 등의 상세 정보를
 * 조회할 수 있습니다. 이 정보는 트랜잭션이 성공적으로 처리되었는지, 아직 처리 중인지, 또는 실패했는지 등을 판단하는 데
 * 유용하게 사용될 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - 조회할 트랜잭션이 발생한 블록체인 네트워크의 ID입니다. 이는 `config['chains'][number]['id']`로,
 * 특정 네트워크에 대한 조회를 제한하는 데 사용됩니다.
 *
 * @param {UseTransactionParameters<config, chainId, GetTransactionData<config, chainId>>} params
 * - `useTransaction` 훅에 전달될 파라미터 객체입니다. 이 객체는 트랜잭션 정보 조회 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useTransaction` 훅 호출 결과를 반환합니다. 이는 조회된 트랜잭션의 상세 정보와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 특정 트랜잭션의 처리 상태를 사용자에게 제공하거나, 추가적인 분석을 위한 기준으로 사용할 수 있습니다.
 */
export function useWagmiTransaction<
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
>(
  params: UseTransactionParameters<
    config,
    chainId,
    GetTransactionData<config, chainId>
  > = {}
) {
  return useTransaction({ ...params });
}

/**
 * `useWagmiTransactionConfirmations` 훅은 블록에서 트랜잭션이 처리된 이후 전달된 블록 수(확인)를 가져오기 위해 `useTransactionConfirmations` 훅을 사용합니다.
 * 확인이 0이면 거래가 아직 확인 및 처리되지 않은것입니다.
 *
 * 이 훅은 블록체인 네트워크에서 트랜잭션이 얼마나 많은 블록에 의해 확인되었는지를 추적합니다. 이 정보는 트랜잭션의 최종성을 판단하는 데 중요하며,
 * 특정 수의 컨펌이 필요한 애플리케이션 로직에 유용하게 사용될 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - 조회할 트랜잭션이 발생한 블록체인 네트워크의 ID입니다. 이는 `config['chains'][number]['id']` 또는 `undefined`일 수 있습니다.
 *
 * @param {UseTransactionConfirmationsParameters<config, chainId, GetTransactionConfirmationsData>} params
 * - `useTransactionConfirmations` 훅에 전달될 파라미터 객체입니다. 이 객체는 트랜잭션 컨펌 수 조회 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useTransactionConfirmations` 훅 호출 결과를 반환합니다. 이는 조회된 트랜잭션의 컨펌 수와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 트랜잭션의 최종성을 판단하거나, 사용자에게 해당 정보를 제공할 수 있습니다.
 */
export function useWagmiTransactionConfirmations<
  config extends Config = ResolvedRegister['config'],
  chainId extends config['chains'][number]['id'] | undefined = undefined,
>(
  params: UseTransactionConfirmationsParameters<
    config,
    chainId,
    GetTransactionConfirmationsData
  > = {} as any
) {
  return useTransactionConfirmations({ ...params });
}

/**
 * `useWagmiTransactionCount` 훅은 계정이 브로드캐스트/전송한 거래 수를 조회하기 위해 `useTransactionCount` 훅을 사용합니다.
 *
 * 이 훅은 주로 계정의 활동 수준을 평가하거나, 특정 주소에서 발생한 트랜잭션의 양을 분석하는 데 사용됩니다.
 * 조회는 블록체인 네트워크의 최신 상태를 반영하며, 결과는 주소가 네트워크에 참여한 이후로 발생한 총 트랜잭션 수를 나타냅니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @param {UseTransactionCountParameters<config, GetTransactionCountData>} params
 * - `useTransactionCount` 훅에 전달될 파라미터 객체입니다. 이 객체는 트랜잭션 개수 조회 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useTransactionCount` 훅 호출 결과를 반환합니다. 이는 조회된 트랜잭션 개수와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 주소의 트랜잭션 활동 수준을 분석하거나, 사용자에게 해당 정보를 제공할 수 있습니다.
 */
export function useWagmiTransactionCount<
  config extends Config = ResolvedRegister['config'],
>(params: UseTransactionCountParameters<config, GetTransactionCountData> = {}) {
  return useTransactionCount({ ...params });
}

/**
 * `useWagmiTransactionReceipt` 훅은 해시 거래의 거래 영수증을 조회하기 위해 `useTransactionReceipt` 훅을 사용합니다.
 *
 * 이 훅은 블록체인 네트워크에서 특정 트랜잭션의 처리 결과를 포함하는 영수증을 가져옵니다. 트랜잭션 영수증에는 트랜잭션이 성공적으로 처리되었는지,
 * 가스 사용량, 발생한 이벤트, 함수 호출 결과 등의 정보가 포함될 수 있습니다. 이 정보는 트랜잭션의 최종 상태를 확인하거나,
 * 스마트 컨트랙트와의 상호작용 결과를 분석하는 데 유용합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - 조회할 트랜잭션이 발생한 블록체인 네트워크의 ID입니다. 이는 `config['chains'][number]['id']`를 기반으로 합니다.
 *
 * @param {UseTransactionReceiptParameters<config, chainId, GetTransactionReceiptData<config, chainId>>} params
 * - `useTransactionReceipt` 훅에 전달될 파라미터 객체입니다. 이 객체는 트랜잭션 영수증 조회 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useTransactionReceipt` 훅 호출 결과를 반환합니다. 이는 조회된 트랜잭션 영수증과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 트랜잭션의 최종 상태를 확인하거나, 트랜잭션 처리 결과에 대한 상세 정보를 사용자에게 제공할 수 있습니다.
 */
export function useWagmiTransactionReceipt<
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
>(
  params: UseTransactionReceiptParameters<
    config,
    chainId,
    GetTransactionReceiptData<config, chainId>
  > = {}
) {
  return useTransactionReceipt({ ...params });
}

/**
 * `useWagmiWaitForTransactionReceipt` 훅은 트랜잭션이 블록에 포함될 때까지 기다린 후 트랜잭션의 영수증을 반환하기 위해 `useWaitForTransactionReceipt` 훅을 사용합니다.
 * 트랜잭션이 되돌려지면 작업에서 오류가 발생합니다. 교체 감지(예: 트랜잭션 속도 향상)도 지원됩니다.
 *
 * 이 훅은 트랜잭션이 블록체인 네트워크에 의해 처리되고 확인될 때까지 대기한 후, 해당 트랜잭션의 영수증을 반환합니다.
 * 트랜잭션 영수증에는 트랜잭션의 성공 여부, 가스 사용량, 이벤트 로그 등 트랜잭션 실행에 대한 중요한 정보가 포함됩니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - 조회할 트랜잭션이 발생한 블록체인 네트워크의 ID입니다. 이는 `config['chains'][number]['id']`를 기반으로 합니다.
 *
 * @param {UseWaitForTransactionReceiptParameters<config, chainId, WaitForTransactionReceiptData<config, chainId>>} params
 * - `useWaitForTransactionReceipt` 훅에 전달될 파라미터 객체입니다. 이 객체는 트랜잭션 영수증 조회 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useWaitForTransactionReceipt` 훅 호출 결과를 반환합니다. 이는 조회된 트랜잭션 영수증과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 트랜잭션의 처리 결과를 확인하고, 필요한 후속 조치를 취할 수 있습니다.
 */
export function useWagmiWaitForTransactionReceipt<
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
>(
  params: UseWaitForTransactionReceiptParameters<
    config,
    chainId,
    WaitForTransactionReceiptData<config, chainId>
  > = {}
) {
  return useWaitForTransactionReceipt({ ...params });
}

/**
 * `useWagmiVerifyMessage` 훅은 제공된 주소로 메시지가 서명되었는지 확인하기 위해 `useVerifyMessage` 훅을 사용합니다.
 * 스마트 계약 계정 또는 외부 소유 계정으로 서명된 메시지 확인을 지원합니다.
 *
 * 이 훅은 디지털 서명의 유효성을 검증하는 과정을 단순화합니다. 주로 사용자 인증, 메시지의 무결성 확인, 또는 특정 작업에 대한 승인 검증 등에 사용됩니다.
 * 메시지와 서명, 그리고 서명을 생성한 주소가 제공되면, 이 훅은 서명이 해당 주소에 의해 생성되었는지를 검증합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @param {UseVerifyMessageParameters<config, VerifyMessageData>} params - `useVerifyMessage` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 메시지 검증 시 필요한 다양한 옵션을 포함할 수 있으며, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useVerifyMessage` 훅 호출 결과를 반환합니다. 이는 메시지 검증 과정과 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 메시지의 서명이 유효한지 확인하고, 해당 정보를 사용자에게 제공할 수 있습니다.
 */
export function useWagmiVerifyMessage<
  config extends Config = ResolvedRegister['config'],
>(params: UseVerifyMessageParameters<config, VerifyMessageData> = {}) {
  return useVerifyMessage({ ...params });
}

/**
 * `useWagmiVerifyTypedData` 훅은 입력된 데이터가 제공된 주소로 서명되었는지를 확인하기 위해 `useVerifyTypedData` 훅을 사용합니다.
 * 스마트 계약 계정 또는 외부 소유 계정에 의해 서명된 입력된 데이터 확인을 지원합니다.
 *
 * 이 훅은 사용자가 제공한 타입화된 데이터와 서명이 특정 주소에 의해 생성되었는지 확인하는 과정을 단순화합니다. EIP-712는
 * 사용자가 이해하기 쉬운 메시지 서명을 가능하게 하며, 서명된 데이터의 구조와 의미를 명확하게 합니다. 이 표준은 메시지 서명의
 * 안전성을 향상시키고, 서명된 데이터를 더 잘 이해할 수 있게 합니다.
 *
 * @template typedData - 검증할 타입화된 데이터입니다. `TypedData` 타입 또는 타입화된 데이터를 설명하는 객체 리터럴을 사용할 수 있습니다.
 *
 * @template primaryType - 검증할 데이터의 주요 타입입니다. 이는 `typedData`에 정의된 키 중 하나거나 'EIP712Domain'이 될 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @param {UseVerifyTypedDataParameters<typedData, primaryType, config, VerifyTypedDataData>} params
 * - `useVerifyTypedData` 훅에 전달될 파라미터 객체입니다. 이 객체는 타입화된 데이터와 서명의 검증 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `typedData`, `primaryType`, `config` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useVerifyTypedData` 훅 호출 결과를 반환합니다. 이는 타입화된 데이터와 서명의 검증 결과를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 서명된 데이터의 유효성을 확인하고, 해당 정보를 사용자에게 제공할 수 있습니다.
 */
export function useWagmiVerifyTypedData<
  const typedData extends TypedData | Record<string, unknown>,
  primaryType extends keyof typedData | 'EIP712Domain',
  config extends Config = ResolvedRegister['config'],
>(
  params: UseVerifyTypedDataParameters<
    typedData,
    primaryType,
    config,
    VerifyTypedDataData
  > = {} as any
) {
  return useVerifyTypedData({ ...params });
}

/**
 * `useWagmiWalletClient` 훅은 현재 또는 제공된 커넥터의 `Viem WalletClient`를 가져오기 위해 `useWalletClient` 훅을 사용합니다.
 *
 * 이 훅은 애플리케이션 내에서 사용자의 지갑과의 상호작용을 용이하게 하기 위해 설계되었습니다. 지갑 클라이언트를 통해 사용자는
 * 블록체인 네트워크에 트랜잭션을 전송하거나, 계정의 잔액을 조회하고, 다른 블록체인 관련 작업을 수행할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - 지갑 클라이언트가 상호작용할 블록체인 네트워크의 ID입니다. 이는 `config['chains'][number]['id']`를 기반으로 합니다.
 *
 * @param {UseWalletClientParameters<config, chainId, GetWalletClientData<config, chainId>>} params
 * - `useWalletClient` 훅에 전달될 파라미터 객체입니다. 이 객체는 지갑 클라이언트 인스턴스의 생성 및 관리 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useWalletClient` 훅 호출 결과를 반환합니다. 이는 생성된 지갑 클라이언트 인스턴스와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 사용자의 지갑과의 상호작용을 관리하고, 블록체인 네트워크와의 통신을 용이하게 할 수 있습니다.
 */
export function useWagmiWalletClient<
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
>(
  params: UseWalletClientParameters<
    config,
    chainId,
    GetWalletClientData<config, chainId>
  > = {}
) {
  return useWalletClient({ ...params });
}

/**
 * `useWagmiWatchBlocks` 훅은 블록 변경을 감시하기 위해 `useWatchBlocks` 훅을 사용합니다.
 *
 * 이 훅은 지정된 블록체인 네트워크에서 새로운 블록이 생성될 때마다 해당 블록의 정보를 가져옵니다. 선택적으로 트랜잭션 정보를 포함시킬 수 있으며,
 * 특정 블록 태그(`latest`, `earliest`, `pending` 등)에 대한 관찰을 설정할 수 있습니다. 이를 통해 애플리케이션은 블록체인의 최신 상태를
 * 실시간으로 반영할 수 있으며, 블록 생성 및 트랜잭션 처리 과정을 모니터링할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - 관찰할 블록체인 네트워크의 ID입니다. 이는 `config['chains'][number]['id']`를 기반으로 합니다.
 *
 * @template includeTransactions - 반환된 블록 정보에 트랜잭션 데이터를 포함할지 여부를 결정하는 불리언 값입니다. 기본값은 `false`입니다.
 *
 * @template blockTag - 관찰할 블록의 태그입니다. `latest`, `earliest`, `pending` 등이 될 수 있으며, 기본값은 `latest`입니다.
 *
 * @param {UseWatchBlocksParameters<includeTransactions, blockTag, config, chainId>} params
 * - `useWatchBlocks` 훅에 전달될 파라미터 객체입니다. 이 객체는 블록 관찰 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `includeTransactions`, `blockTag`, `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useWatchBlocks` 훅 호출 결과를 반환합니다. 이는 관찰된 블록 정보와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 블록체인 네트워크의 최신 상태를 실시간으로 반영하고, 사용자에게 해당 정보를 제공할 수 있습니다.
 */
export function useWagmiWatchBlocks<
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
  includeTransactions extends boolean = false,
  blockTag extends BlockTag = 'latest',
>(
  params: UseWatchBlocksParameters<
    includeTransactions,
    blockTag,
    config,
    chainId
  > = {} as any
) {
  return useWatchBlocks({ ...params });
}

/**
 * `useWagmiWatchBlockNumber` 훅은 블록 번호 변경을 감시하기 위해 `useWatchBlockNumber` 훅을 사용합니다.
 *
 * 이 훅은 블록체인 네트워크의 상태 변화를 실시간으로 반영하고자 할 때 유용하며, 최신 블록 번호의 변화를 감지하여 애플리케이션에
 * 즉각적으로 반영할 수 있도록 합니다. 이를 통해 사용자에게 최신 블록체인 정보를 제공하거나, 특정 블록 번호를 기준으로 한 작업을
 * 실행할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - 관찰하고자 하는 블록체인 네트워크의 ID입니다. 이는 `config['chains'][number]['id']`를 기반으로 합니다.
 *
 * @param {UseWatchBlockNumberParameters<config, chainId>} params - `useWatchBlockNumber` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 블록 번호 관찰 시 필요한 다양한 옵션을 포함할 수 있으며, `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useWatchBlockNumber` 훅 호출 결과를 반환합니다. 이는 관찰 중인 최신 블록 번호와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 블록체인의 최신 상태를 반영하고, 필요한 로직을 실행할 수 있습니다.
 */
export function useWagmiWatchBlockNumber<
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
>(params: UseWatchBlockNumberParameters<config, chainId> = {} as any) {
  return useWatchBlockNumber({ ...params });
}

/**
 * `useWagmiWatchContractEvent` 훅은 내보낸 컨트랙트 이벤트 로그를 감시하고 반환하기 위해 `useWatchContractEvent` 훅을 사용합니다.
 *
 * 이 훅은 특정 스마트 컨트랙트의 이벤트 발생을 실시간으로 감지하고자 할 때 사용됩니다. 예를 들어, 사용자가 특정 조건을 충족하는 트랜잭션을
 * 보냈을 때 발생하는 이벤트를 감지하거나, 컨트랙트 상태의 변경을 추적하는 데 유용합니다.
 *
 * @template abi - 감시할 스마트 컨트랙트의 ABI(애플리케이션 바이너리 인터페이스)입니다.
 *
 * @template eventName - 감시할 이벤트의 이름입니다. 이는 `abi`에 정의된 이벤트 이름 중 하나여야 합니다.
 *
 * @template strict - 엄격한 타입 검사를 사용할지 여부를 지정합니다. `true`로 설정하면, `eventName`이 `abi`에 정확히 정의된 이벤트 이름과 일치해야 합니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - 이벤트를 감시할 블록체인 네트워크의 ID입니다. 이는 `config['chains'][number]['id']`를 기반으로 합니다.
 *
 * @param {UseWatchContractEventParameters<abi, eventName, strict, config, chainId>} params
 * - `useWatchContractEvent` 훅에 전달될 파라미터 객체입니다. 이 객체는 컨트랙트 이벤트 감시 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `abi`, `eventName`, `strict`, `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useWatchContractEvent` 훅 호출 결과를 반환합니다. 이는 감시된 컨트랙트 이벤트와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 스마트 컨트랙트의 특정 이벤트 발생을 실시간으로 감지하고, 필요한 반응을 할 수 있습니다.
 */
export function useWagmiWatchContractEvent<
  const abi extends Abi | ReadonlyArray<unknown>,
  eventName extends ContractEventName<abi>,
  strict extends boolean | undefined = undefined,
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
>(
  params: UseWatchContractEventParameters<
    abi,
    eventName,
    strict,
    config,
    chainId
  > = {} as any
) {
  return useWatchContractEvent({ ...params });
}

/**
 * `useWagmiWatchPendingTransactions` 훅은 보류 중인 트랜잭션 해시를 감시하고 반환하기 위해 `useWatchPendingTransactions` 훅을 사용합니다.
 *
 * 이 훅은 네트워크의 mempool(트랜잭션이 블록에 포함되기 전 대기하는 공간)에서 대기 중인 트랜잭션들의 정보를 실시간으로 제공합니다.
 * 개발자는 이를 통해 네트워크의 현재 트랜잭션 처리 상태, 가스 가격의 변동성, 또는 특정 조건을 만족하는 트랜잭션의 발생을 감지할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template chainId - 관찰할 트랜잭션이 발생한 블록체인 네트워크의 ID입니다. 이는 `config['chains'][number]['id']`를 기반으로 합니다.
 *
 * @param {UseWatchPendingTransactionsParameters<config, chainId>} params
 * - `useWatchPendingTransactions` 훅에 전달될 파라미터 객체입니다. 이 객체는 대기 중인 트랜잭션 관찰 시 필요한 다양한 옵션을 포함할 수 있으며,
 * `config`, `chainId` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useWatchPendingTransactions` 훅 호출 결과를 반환합니다. 이는 대기 중인 트랜잭션들에 대한 정보와 관련된 데이터를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 네트워크의 트랜잭션 처리 상태를 모니터링하거나, 특정 조건을 만족하는 트랜잭션의 발생을 감지할 수 있습니다.
 */
export function useWagmiWatchPendingTransactions<
  config extends Config = ResolvedRegister['config'],
  chainId extends
    config['chains'][number]['id'] = config['chains'][number]['id'],
>(params: UseWatchPendingTransactionsParameters<config, chainId> = {} as any) {
  return useWatchPendingTransactions({ ...params });
}

/**
 * `useWagmiWriteContract` 훅은 컨트랙트에 대한 쓰기 기능을 실행하기 위해 `useWriteContract` 훅을 사용합니다.
 * Solidity 계약의 "쓰기" 기능은 블록체인의 상태를 수정합니다. 이러한 유형의 기능을 실행하려면 가스가 필요하므로 상태를 변경하기 위해 트랜잭션이 브로드캐스트됩니다.
 *
 * 이 훅은 사용자가 지정한 스마트 컨트랙트의 함수를 호출하여 블록체인 상태를 변경하는 트랜잭션을 생성하고 전송합니다.
 * 사용자는 이 훅을 통해 스마트 컨트랙트와 상호작용하고, 블록체인 상의 데이터를 수정하거나, 특정 작업을 실행할 수 있습니다.
 *
 * @template config - `Config` 타입을 확장한 제네릭 타입 파라미터로, 사용자 정의 설정 타입을 지정할 수 있습니다.
 * 기본값으로는 `ResolvedRegister['config']`가 사용됩니다. 이 설정은 Wagmi 클라이언트의 구성 정보를 포함하며,
 * 특정 네트워크 설정이나 사용자 인증 방식 등을 정의할 수 있습니다.
 *
 * @template context - 트랜잭션 작성 및 전송 과정에서 사용될 수 있는 추가적인 컨텍스트 정보를 지정하는 타입입니다.
 *
 * @param {UseWriteContractParameters<config, context>} params - `useWriteContract` 훅에 전달될 파라미터 객체입니다.
 * 이 객체는 스마트 컨트랙트와의 상호작용 시 필요한 다양한 옵션을 포함할 수 있으며, `config`, `context` 타입에 의해 결정되는 매개변수를 포함할 수 있습니다.
 *
 * @returns `useWriteContract` 훅 호출 결과를 반환합니다. 이는 트랜잭션 작성 및 전송 과정과 관련된 데이터와 함수를 포함할 수 있습니다.
 * 반환되는 객체를 통해 애플리케이션에서 스마트 컨트랙트와의 상호작용을 관리하고, 사용자에게 트랜잭션의 처리 결과를 제공할 수 있습니다.
 */
export function useWagmiWriteContract<
  config extends Config = ResolvedRegister['config'],
  context = unknown,
>(params: UseWriteContractParameters<config, context> = {}) {
  return useWriteContract({ ...params });
}
