/* eslint-disable */
/* Pickup from src/shared/js/symbol-font.js */
export const SYMBOL_FONT_IDS = ["brave-qeeb","brave-eth","brave-trx","brave-btc","brave-fil","brave-bzz","brave-doge","brave-usdt","brave-dot-fill","brave-dot"];
export const checkSymbolFontId = (id) => {
  let _key = id.startsWith('brave-') ? id : `brave-${id.toLowerCase()}`;  return SYMBOL_FONT_IDS.find((i) => i === _key);
};
