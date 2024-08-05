import type { AddEthereumChainParameter } from '@web3-react/types';

const ETH: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Ether',
  symbol: 'ETH',
  decimals: 18,
};

const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Matic',
  symbol: 'MATIC',
  decimals: 18,
};

const CELO: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Celo',
  symbol: 'CELO',
  decimals: 18,
};

type BasicChainInformationType = {
  urls: Array<string>;
  name: string;
};

type ExtendedChainInformationType = {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency'];
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls'];
} & BasicChainInformationType;

function isExtendedChainInformation(
  chainInformation: BasicChainInformationType | ExtendedChainInformationType
): chainInformation is ExtendedChainInformationType {
  return !!(chainInformation as ExtendedChainInformationType).nativeCurrency;
}

export function getAddChainParameters(
  chainId: number
): AddEthereumChainParameter | number {
  const chainInformation = CHAINS[chainId];
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    };
  } else {
    return chainId;
  }
}

const getInfuraUrlFor = (network: string) =>
  import.meta.env.infuraKey
    ? `https://${network}.infura.io/v3/${import.meta.env.infuraKey}`
    : '';
const getAlchemyUrlFor = (network: string) =>
  import.meta.env.alchemyKey
    ? `https://${network}.alchemyapi.io/v2/${import.meta.env.alchemyKey}`
    : '';

type ChainConfigType = {
  [chainId: number]: BasicChainInformationType | ExtendedChainInformationType;
};

export const MAINNET_CHAINS: ChainConfigType = {
  1: {
    urls: [
      getInfuraUrlFor('mainnet'),
      getAlchemyUrlFor('eth-mainnet'),
      'https://cloudflare-eth.com',
    ].filter(Boolean),
    name: 'Mainnet',
  },
  10: {
    urls: [
      getInfuraUrlFor('optimism-mainnet'),
      'https://mainnet.optimism.io',
    ].filter(Boolean),
    name: 'Optimism',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://optimistic.etherscan.io'],
  },
  42161: {
    urls: [
      getInfuraUrlFor('arbitrum-mainnet'),
      'https://arb1.arbitrum.io/rpc',
    ].filter(Boolean),
    name: 'Arbitrum One',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://arbiscan.io'],
  },
  137: {
    urls: [
      getInfuraUrlFor('polygon-mainnet'),
      'https://polygon-rpc.com',
    ].filter(Boolean),
    name: 'Polygon Mainnet',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://polygonscan.com'],
  },
  42220: {
    urls: ['https://forno.celo.org'],
    name: 'Celo',
    nativeCurrency: CELO,
    blockExplorerUrls: ['https://explorer.celo.org'],
  },
};

export const TESTNET_CHAINS: ChainConfigType = {
  5: {
    urls: [getInfuraUrlFor('goerli')].filter(Boolean),
    name: 'Görli',
  },
  420: {
    urls: [
      getInfuraUrlFor('optimism-goerli'),
      'https://goerli.optimism.io',
    ].filter(Boolean),
    name: 'Optimism Goerli',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://goerli-explorer.optimism.io'],
  },
  421613: {
    urls: [
      getInfuraUrlFor('arbitrum-goerli'),
      'https://goerli-rollup.arbitrum.io/rpc',
    ].filter(Boolean),
    name: 'Arbitrum Goerli',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://testnet.arbiscan.io'],
  },
  80001: {
    urls: [getInfuraUrlFor('polygon-mumbai')].filter(Boolean),
    name: 'Polygon Mumbai',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://mumbai.polygonscan.com'],
  },
  44787: {
    urls: ['https://alfajores-forno.celo-testnet.org'],
    name: 'Celo Alfajores',
    nativeCurrency: CELO,
    blockExplorerUrls: ['https://alfajores-blockscout.celo-testnet.org'],
  },
  11155111: {
    urls: ['https://rpc.sepolia.org'],
    name: 'Sepolia',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://rpc.sepolia.org'],
  },
};

export const CHAINS: ChainConfigType = {
  ...MAINNET_CHAINS,
  ...TESTNET_CHAINS,
};

export const URLS: { [chainId: number]: Array<string> } = Object.keys(
  CHAINS
).reduce<{ [chainId: number]: Array<string> }>((accumulator, chainId) => {
  const validURLs: Array<string> = CHAINS[Number(chainId)].urls;

  if (validURLs.length) {
    accumulator[Number(chainId)] = validURLs;
  }

  return accumulator;
}, {});
