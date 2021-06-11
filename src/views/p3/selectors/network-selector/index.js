/**
 *
 * @module: network-selector
 *   Main file: index.js
 *   DOM files: selector-comp.jsx,network-selector.scss,
 * @Created: lanbery 21-06-11 10:13 Friday
 *
 */
export { default } from './selector-container.js';

export const MAINNET_ETH = 'mainnet';
export const ROPSTEN = 'ropsten';
export const RINKEBY = 'rinkeby';
export const GOERLI = 'goerli';
export const KOVAN = 'kovan';

export const MAINNET_ETH_CHAIN_ID = 0x1;
export const ROPSTEN_CHAIN_ID = 0x3;
export const RINKEBY_CHAIN_ID = 0x4;
export const GOERLI_CHAIN_ID = 0x5;
export const KOVAN_CHAIN_ID = 0x2a;

export const NETWORK_TYPE_MAP = {
  [MAINNET_ETH]: MAINNET_ETH_CHAIN_ID,
  [ROPSTEN]: ROPSTEN_CHAIN_ID,
  [RINKEBY]: RINKEBY_CHAIN_ID,
  [GOERLI]: GOERLI_CHAIN_ID,
  [KOVAN]: KOVAN_CHAIN_ID,
};
export const NETWORK_KEY_MAP = {
  [MAINNET_ETH_CHAIN_ID]: {
    name: MAINNET_ETH,
    networkId: MAINNET_ETH_CHAIN_ID.toString(),
  },
  [ROPSTEN_CHAIN_ID]: { name: ROPSTEN, networkId: ROPSTEN_CHAIN_ID.toString() },
  [RINKEBY_CHAIN_ID]: { name: RINKEBY, networkId: RINKEBY_CHAIN_ID.toString() },
  [GOERLI_CHAIN_ID]: { name: GOERLI, networkId: GOERLI_CHAIN_ID.toString() },
  [KOVAN_CHAIN_ID]: { name: KOVAN, networkId: KOVAN_CHAIN_ID.toString() },
};
