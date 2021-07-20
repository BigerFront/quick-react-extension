import React from 'react';

import { useLocation } from 'react-router-dom';

import { getMenuName } from '~P3/routes/brave-menus';
import { SIGNIN_NESTED } from '~P3/routes/routes-consts';

const HomeNavLabel = (props) => {
  const { className = 'home-nav__wrapper' } = props;
  const location = useLocation();

  const MenuItem = getMenuName(location.pathname || '');
  const { name, icon, iconProps } = MenuItem;
  const MenuIcon = icon;
  const notSignin = location.pathname !== SIGNIN_NESTED;
  return notSignin ? (
    <div className={className}>
      {MenuIcon ? <MenuIcon {...iconProps} className="brave-nav-icon" /> : null}
      <span className="home-nav-label">{name}</span>
    </div>
  ) : null;
};

export default HomeNavLabel;
