import EnUsMessages from './en-US';
import ZhCnMessages from './zh-CN';
import ZhTwMessages from './zh-TW';

const ZH_CN = 'zh-CN';
const ZH_TW = 'zh-TW';
const EN_US = 'en-US';

export const DEFAULT_LOCALE = EN_US;

export const LOCALE_MAP = {
  [ZH_CN]: {
    text: '简体中文',
    value: ZH_CN,
  },
  [ZH_TW]: {
    text: '繁體中文',
    value: ZH_TW,
  },
  [EN_US]: {
    text: 'English',
    value: EN_US,
  },
};

export const getLocaleMessage = (locale) => {
  switch (locale) {
    case ZH_CN: {
      return ZhCnMessages;
    }
    case ZH_TW:
      return ZhTwMessages;
    case EN_US:
      return EnUsMessages;
    default: {
      return EnUsMessages;
    }
  }
};

export const getLocales = (deflocale) => {
  return Object.values(LOCALE_MAP).sort((a, b) => {
    if (a.value === deflocale) return -1;
    if (b.value === deflocale) return 1;
    return a.value > b.value ? 1 : -1;
  });
};
