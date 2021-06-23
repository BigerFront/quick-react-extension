/* Pickup from src/shared/js/symbol-font.js */
export const SYMBOL_FONT_IDS = [
  'brave-eth',
  'brave-trx',
  'brave-btc',
  'brave-fil',
  'brave-bzz',
  'brave-doge',
  'brave-ther',
  'brave-dot-fill',
  'brave-dot',
];
export const checkBraveIconType = (name) => {
  let key = name.startsWith('brave-') ? name : `brave-${name}`;
  return SYMBOL_FONT_IDS.find((i) => i === key);
};
