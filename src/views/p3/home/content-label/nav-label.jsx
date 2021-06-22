import React from 'react';

import { useLocation } from 'react-router-dom';

import logger from '~Lib/log';
import { getMenuName } from '~P3/routes/brave-menus';

const HomeNavLabel = (props) => {
  const { className = 'home-nav__wrapper' } = props;
  const location = useLocation();

  const MenuItem = getMenuName(location.pathname || '');
  const { name, icon, iconProps } = MenuItem;
  const MenuIcon = icon;
  return (
    <div className={className}>
      {MenuIcon ? <MenuIcon {...iconProps} className="brave-nav-icon" /> : null}
      <span className="home-nav-label">{name}</span>
    </div>
  );
};

export default HomeNavLabel;
