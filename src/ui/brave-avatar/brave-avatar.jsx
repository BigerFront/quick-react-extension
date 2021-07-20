import React from 'react';
import { useSelector } from 'react-redux';

import { Avatar } from 'antd';

import { braveThemeSelector } from '~Views/selectors/ui-selector';
import braveBuleSrc from '~Assets/images/brave-blue.png';
import braveRedSrc from '~Assets/images/brave-red.png';
import braveGoldenSrc from '~Assets/images/brave-golden.png';
import braveLockedSrc from '~Assets/images/brave-golden-locked.png';

import {
  BLUE_LOGO_THEME,
  RED_LOGO_THEME,
  GOLDEN_LOGO_THEME,
} from '~UI/ui-cnst';

export default function BraveAvatar(props) {
  const { alt, gap, icon, shape, size = 80, className, style } = props;

  const isUnlocked = useSelector((state) => state.braveState?.isUnlocked);
  const avatarTheme = useSelector(braveThemeSelector);

  let _clsName =
    className && className !== 'brave-avatar'
      ? `brave-avatar ${className}`
      : 'brave-avatar';
  const _props = { alt, gap, size, shape, icon, style };
  let src;

  switch (avatarTheme) {
    case BLUE_LOGO_THEME:
      src = braveBuleSrc;
      break;
    case RED_LOGO_THEME:
      src = braveRedSrc;
      break;
    case GOLDEN_LOGO_THEME:
      src = braveGoldenSrc;
      break;
    default:
      src = braveRedSrc;
      break;
  }

  return (
    <Avatar
      className={_clsName}
      {..._props}
      src={isUnlocked ? src : braveLockedSrc}
    />
  );
}
