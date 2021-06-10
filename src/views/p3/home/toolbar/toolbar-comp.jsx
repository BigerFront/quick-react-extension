/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import { Menu, Dropdown, Button } from 'antd';

import logger from '~Lib/log';

import {
  SettingOutlined,
  LockOutlined,
  MoreOutlined,
  DownOutlined,
} from '@ant-design/icons';

import {
  CONTACTS_ROOT_NESTED,
  ASSETS_ROOT_NESTED,
  TRANSACTION_ROOT_NESTED,
} from '~P3/routes/routes-consts';

export default class ToolbarComponent extends Component {
  tabLabelMap = {
    [CONTACTS_ROOT_NESTED]: {
      name: 'Contacts',
    },
    [ASSETS_ROOT_NESTED]: {
      name: 'Digital Assets',
    },
    [TRANSACTION_ROOT_NESTED]: {
      name: 'Transaction',
    },
  };

  state = {
    currentLabel: this.tabLabelMap[CONTACTS_ROOT_NESTED].name,
    size: 'small',
    currentPath: CONTACTS_ROOT_NESTED,
  };

  onDropLabelHandler = ({ key }) => {
    const { history } = this.props;

    const label = this.tabLabelMap[key] ? this.tabLabelMap[key].name || '' : '';

    this.setState({
      currentPath: key,
      currentLabel: label,
    });

    history.push(key);
  };

  lockedHandler = () => {
    const { lockBravTroops } = this.props;

    lockBravTroops().then(() => {
      logger.debug('>>>>>>> Locked success>>>>>');
    });
    // history.push(SIGNIN_ROUTE);
  };

  renderTabLabelContainer() {
    const { currentPath } = this.state;

    const keys = Object.keys(this.tabLabelMap);
    const _keyObj = { ...this.tabLabelMap };

    const menu = (
      <Menu onClick={this.onDropLabelHandler}>
        {keys.map((key) => {
          return (
            <Menu.Item key={key}>
              <span className={currentPath === key ? 'actived' : ''}>
                {_keyObj[key].name}
              </span>
            </Menu.Item>
          );
        })}
      </Menu>
    );

    return (
      <div className="home-toolbar__tab--container">
        <Dropdown
          overlay={() => menu}
          trigger={['hover']}
          overlayClassName="home-toolbar__dropdown"
        >
          <div onClick={(e) => e.preventDefault()}>
            <span> {this.state.currentLabel}</span>
            <DownOutlined style={{ paddingLeft: '4px' }} />
          </div>
        </Dropdown>
      </div>
    );
  }

  renderOptionsContainer() {
    return (
      <div className="home-toolbar__options-wrapper">
        <Button
          className="toolbar-btn"
          type="text"
          shape="circle"
          size={this.state.size}
          icon={<SettingOutlined />}
        />

        <Button
          className="toolbar-btn"
          type="text"
          shape="circle"
          size={this.state.size}
          onClick={this.lockedHandler}
          icon={<LockOutlined />}
        />
        <Button
          className="toolbar-btn"
          type="text"
          shape="circle"
          size={this.state.size}
          icon={<MoreOutlined />}
        />
      </div>
    );
  }

  render() {
    // const { xxx } = this.props;

    return (
      <div className="home-toolbar__wrapper">
        {this.renderTabLabelContainer()}
        {this.renderOptionsContainer()}
      </div>
    );
  }
}
