/** Ethereum Chain */
export const USDT_ERC20_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

export const BNB_ERC20_ADDRESS = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52';

/** Binance Smart Chain */
export const DOGE_BSC_ERC20_ADDRESS =
  '0xba2ae424d960c26247dd6c32edc70b295c744c43';
export const DAI_MAKER_DAO_ADDRESS =
  '0x6b175474e89094c44da98b954eedeac495271d0f';

export const POLKDOT_ERC20_M_ADDRESS =
  '0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907';
export const USDT_ERC20_M_ADDRESS =
  '0xdac17f958d2ee523a2206206994597c13d831ec7';

export const ETH_COIN_ID = 'brave_ether';
export const BTC_COIN_ID = 'brave_bitcoin';
export const DOT_COIN_ID = 'brave_polkdot';
export const TETHER_COIN_ID = 'brave_tether';

export const DEF_COIN_MAP = {
  [BTC_COIN_ID]: {
    id: BTC_COIN_ID,
    symbol: 'BTC',
    iconType: 'brave-btc',
    color: 'rgb(210,105,30)',
  },
  [TETHER_COIN_ID]: {
    id: TETHER_COIN_ID,
    symbol: 'USDT',
    iconType: 'brave-usdt',
    address: USDT_ERC20_M_ADDRESS,
  },
  [ETH_COIN_ID]: {
    id: ETH_COIN_ID,
    symbol: 'ETH',
    iconType: 'brave-eth',
  },
  [DOT_COIN_ID]: {
    id: DOT_COIN_ID,
    symbol: 'DOT',
    iconType: 'brave-dot-fill',
    address: POLKDOT_ERC20_M_ADDRESS,
  },
};
