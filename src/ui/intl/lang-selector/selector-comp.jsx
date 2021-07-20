import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Select } from 'antd';
import logger from '~Lib/log';

import { getLocales, DEFAULT_LOCALE } from '../../locale';
import { SET_CURRENT_LOCALE } from '~Store/core-acticon-types';

const LangSelectorComp = (props) => {
  const currentLocale = useSelector(
    (state) => state.braveState?.currentLocale || DEFAULT_LOCALE
  );

  const {
    className = 'intl-selector',
    size,
    minWidth,
    maxWidth = '100%',
  } = props || {};

  const locales = getLocales(DEFAULT_LOCALE);

  const dispatch = useDispatch();

  const onSelectHandle = (val) => {
    dispatch({ type: SET_CURRENT_LOCALE, payload: { currentLocale: val } });
  };

  return (
    <Select
      className={className}
      value={currentLocale}
      onSelect={onSelectHandle}
      size={size}
      dropdownClassName="intl-selector__dropdown"
      style={{ minWidth: minWidth, maxWidth: maxWidth }}
    >
      {locales.map((lg) => (
        <Select.Option
          key={lg.value}
          value={lg.value}
          className="intl-selector__option"
        >
          {lg.text}
        </Select.Option>
      ))}
    </Select>
  );
};

export default LangSelectorComp;
