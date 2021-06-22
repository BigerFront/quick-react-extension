import React, { Component, createContext, useMemo } from 'react';
import { useSelector } from 'react-redux';

import {
  getCurrentLocaleMessages,
  getEnLocaleMessages,
} from '~Store/reducers/locale';

export const BraveIntlProvider = (props) => {
  // const currentLocale = useSelector(get)
  return <BraveIntlProvider.Provider></BraveIntlProvider.Provider>;
};
