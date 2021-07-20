import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Select } from 'antd';

import { braveThemeSelector } from '~Views/selectors/ui-selector';
import { BRAVE_AVATAR_THEMES } from '~UI/ui-cnst';
import { SET_BRAVE_THEME } from '~Store/core-acticon-types';
import BraveAvatar from '~UI/brave-avatar';

export const BraveThemeSelectBox = (props) => {
  let {
    className,
    size = 'small',
    minWidth,
    maxWidth = '100%',
    dropdownClassName,
  } = props;
  const braveTheme = useSelector(braveThemeSelector);

  const dispatch = useDispatch();

  const onSelectHandler = (val) => {
    dispatch({ type: SET_BRAVE_THEME, val });
  };

  const _clsName = className
    ? `brave-theme__select ${className}`
    : 'brave-theme__select';

  let sizeNum = 28;
  switch (size) {
    case 'small':
      sizeNum = 22;
      break;
    case 'large':
      sizeNum = 32;
      break;
    case 'middle':
      sizeNum = 28;
      break;
    default: {
      if (typeof size === 'number' && size > 0 && size <= 32) {
        sizeNum = size;
      } else if (size > 32) {
        sizeNum = size - 4;
      }
      break;
    }
  }

  return (
    <div className="brave-theme__box" style={{ width: '100%' }}>
      <Select
        value={braveTheme}
        onSelect={onSelectHandler}
        className={_clsName}
        size={size}
        dropdownClassName={dropdownClassName}
        style={{ minWidth: minWidth, maxWidth: maxWidth }}
      >
        {BRAVE_AVATAR_THEMES.map((t) => (
          <Select.Option key={t.id} value={t.id}>
            {t.theme}
          </Select.Option>
        ))}
      </Select>
      <div className="brave-theme__suffix">
        <BraveAvatar size={sizeNum} type={braveTheme} />
      </div>
    </div>
  );
};
