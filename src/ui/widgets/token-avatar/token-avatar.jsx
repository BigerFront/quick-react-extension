import React from 'react';

import { Avatar } from 'antd';

import { checkBraveIconType } from '../brave-icon/brave-icon-types';
import BraveIcon from '../brave-icon';

export default function TokenAvatar(props) {
  let {
    id,
    symbol = '',
    address,
    iconType,
    alt,
    gap,
    icon,
    shape,
    size,
    src,
    className,
    onClick,
    color,
  } = props;
  const _key = iconType || symbol.toLowerCase()||'';
  const tokenType = checkBraveIconType(_key);
  const avatarProps = { alt, gap, icon, shape, size, src };

  const onClickHandler = () => {
    if (typeof onClick === 'function') {
      onClick({ id, address, symbol });
    }
  };

  const nClsName = className
    ? `brave-token-avatar ${className}`
    : 'brave-token-avatar';

  const cursor = typeof onClick === 'function' ? 'pointer' : 'default';
  return (
    <Avatar
      className={nClsName}
      onClick={onClickHandler}
      {...avatarProps}
      style={{ cursor: cursor }}
    >
      {tokenType ? (
        <BraveIcon type={tokenType} style={{ color: color }} />
      ) : (
        <span style={{ color: color }}>{symbol}</span>
      )}
    </Avatar>
  );
}
