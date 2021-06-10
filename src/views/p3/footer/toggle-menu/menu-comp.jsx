import React, { Component } from 'react';

import { Dropdown, Menu, Button, Space } from 'antd';
import { MoreOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';

import logger from '~Lib/log';

import {
  ContactIcon,
  AssetsIcon,
  TransactionIcon,
  SolidityIcon,
} from '~Widgets/svgicons';
import {
  DEFAULT_ROUTE,
  CONTACTS_ROOT_NESTED,
  ASSETS_ROOT_NESTED,
  TRANSACTION_ROOT_NESTED,
  SMART_CONTRACTS_ROOT_NESTED,
} from '~P3/routes/routes-consts';

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
      case CONTACTS_ROOT_NESTED:
      case ASSETS_ROOT_NESTED:
      case TRANSACTION_ROOT_NESTED:
      case SMART_CONTRACTS_ROOT_NESTED:
        this.defaultSelectedKeys = [pathname];

        break;
      default: {
        this.defaultSelectedKeys = [];
      }
    }
    if (pathname === DEFAULT_ROUTE) {
      this.defaultSelectedKeys = [CONTACTS_ROOT_NESTED];
    } else {
      this.defaultSelectedKeys = [pathname];
    }

    logger.debug(
      '>>>>>>>>this.defaultSelectedKeys>>>>>>>',
      this.defaultSelectedKeys
    );
  }

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

  menuheader = () => {
    return (
      <div className="brave-dropdown__header">
        <Space>
          <Button type="ghost" size="small" icon={<SettingOutlined />}>
            Settings
          </Button>
          <Button
            type="ghost"
            size="small"
            icon={<HomeOutlined />}
            onClick={this.goHomeHandle}
          >
            Home
          </Button>
        </Space>
      </div>
    );
  };

  menus = () => {
    return (
      <>
        {this.menuheader()}
        <Menu
          selectable={true}
          onSelect={this.onSelectHandler}
          defaultSelectedKeys={this.defaultSelectedKeys}
          className="brave-dropdown__list"
        >
          <Menu.Divider style={{ margin: '2px 4px' }} />
          <Menu.Item
            key={CONTACTS_ROOT_NESTED}
            className="brave-dropdown--item"
            icon={<ContactIcon />}
          >
            Contacts
          </Menu.Item>

          <Menu.Item
            key={ASSETS_ROOT_NESTED}
            className="brave-dropdown--item"
            icon={<AssetsIcon />}
          >
            Digital Assets
          </Menu.Item>
          <Menu.Item
            key={TRANSACTION_ROOT_NESTED}
            className="brave-dropdown--item"
            icon={<TransactionIcon spin />}
          >
            Transactions
          </Menu.Item>
          <Menu.Divider style={{ margin: '2px 4px' }} />
          <Menu.Item
            key={SMART_CONTRACTS_ROOT_NESTED}
            className="brave-dropdown--item"
            icon={<SolidityIcon spin />}
          >
            Smart Contracts
          </Menu.Item>
        </Menu>
      </>
    );
  };

  render() {
    // const { xxx } = this.props;

    return (
      <>
        <Dropdown
          overlay={this.menus()}
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
