import React, { Component } from 'react';

import { Dropdown, Menu, Button, Space } from 'antd';
import { MoreOutlined, SettingOutlined, LockOutlined } from '@ant-design/icons';

import logger from '~Lib/log';

import { HOME_LAYOUT_TYPE } from '../constants';

import { menuItems } from '~P3/routes/brave-menus';

import { DEFAULT_ROUTE, CONTACTS_ROOT_NESTED } from '~P3/routes/routes-consts';

export default class MenuComponent extends Component {
  state = {
    moreVisible: false,
  };

  // currentSelectedKey = CONTACTS_ROOT_NESTED;
  defaultSelectedKeys = [CONTACTS_ROOT_NESTED];

  UNSAFE_componentWillMount() {
    const {
      history: { location },
    } = this.props;
    const { pathname } = location;
    switch (pathname) {
      case DEFAULT_ROUTE:
        this.defaultSelectedKeys = [CONTACTS_ROOT_NESTED];
        break;
      default: {
        this.defaultSelectedKeys = [pathname];
      }
    }
    if (pathname === DEFAULT_ROUTE) {
      this.defaultSelectedKeys = [CONTACTS_ROOT_NESTED];
    } else {
      this.defaultSelectedKeys = [pathname];
    }
  }

  lockedHandler = () => {
    const { lockBravTroops } = this.props;

    lockBravTroops().then(() => {
      // logger.debug('>>>>>>> Locked success>>>>>');
    });
  };

  onVisibleChange = (visible) => {
    this.setState({ moreVisible: visible });
  };

  onSelectHandler = ({ item, key, selectedKeys }) => {
    const { history } = this.props;

    if (key !== this.currentSelectedKey) {
      history.push(key);
    }
    this.defaultSelectedKeys = selectedKeys;
    this.setState({ moreVisible: false });
  };

  renderDynamicHeaderBtns = () => {
    const { layoutType } = this.props;

    const showLockedBtn = layoutType !== HOME_LAYOUT_TYPE;
    // logger.debug('>>>>>layoutType>>>>>>>>', layoutType, showLockedBtn);
    return (
      <>
        {showLockedBtn ? (
          <Button
            type="ghost"
            size="small"
            icon={<LockOutlined />}
            onClick={this.lockedHandler}
          >
            Lock
          </Button>
        ) : null}
      </>
    );
  };

  overlayMenus = () => {
    return (
      <>
        <div className="brave-dropdown__header">
          <Space>
            <Button type="ghost" size="small" icon={<SettingOutlined />}>
              Settings
            </Button>
            {this.renderDynamicHeaderBtns()}
          </Space>
        </div>
        <Menu
          selectable={true}
          onSelect={this.onSelectHandler}
          defaultSelectedKeys={this.defaultSelectedKeys}
          className="brave-dropdown__list"
        >
          <Menu.Divider style={{ margin: '2px 4px' }} />
          {menuItems
            .filter((it) => !it.hide)
            .map((it, idx) => {
              const {
                divider,
                key,
                name,
                className,
                iconProps = {},
                icon,
              } = it;

              if (divider) {
                return <Menu.Divider style={{ margin: '2px 4px' }} key={idx} />;
              } else {
                const MenuIcon = icon;
                return icon ? (
                  <Menu.Item
                    key={key}
                    className={className}
                    icon={<MenuIcon {...iconProps} />}
                  >
                    {name}
                  </Menu.Item>
                ) : (
                  <Menu.Item key={key} className={className}>
                    {name}
                  </Menu.Item>
                );
              }
            })}
        </Menu>
      </>
    );
  };

  render() {
    return (
      <>
        <Dropdown
          overlay={this.overlayMenus()}
          visible={this.state.moreVisible}
          trigger={['click', 'hover']}
          onVisibleChange={this.onVisibleChange}
          placement="topRight"
          overlayClassName="brave-dropdown"
        >
          <Button
            className="brave-dropdown-btn"
            type="text"
            shape="circle"
            size="small"
            icon={<MoreOutlined />}
          />
        </Dropdown>
      </>
    );
  }
}
