import React, { PureComponent } from 'react';

import { Dropdown, Menu, Button, Space } from 'antd';

import logger from '~Lib/log';
import {
  MoreOutlined,
  LockOutlined,
  HomeOutlined,
  RollbackOutlined,
} from '@ant-design/icons';

import { ContactIcon, AssetsIcon, TransactionIcon } from '~Widgets/svgicons';

export default class MenuPage extends PureComponent {
  state = {
    moreVisible: false,
  };

  defaultSelectedKeys = [];

  onSelectHandler = ({ item, key }) => {
    logger.debug('>>>>>>>>>>>>>', key, this.defaultSelectedKeys);
  };

  renderHeader() {
    return <div className="menu-page__header"> main-menu Header</div>;
  }

  moreMenuChangedHandler = (visible) => {
    this.setState({ moreVisible: visible });
  };

  goHomeHandle = () => {
    const { history } = this.props;
    logger.debug('Home click>>>>>>', history);
    this.setState({ moreVisible: false });
  };

  menus = () => {
    return (
      <>
        <div className="brave-moremenus__header">
          <Space>
            <Button
              type="ghost"
              size="small"
              icon={<HomeOutlined />}
              onClick={this.goHomeHandle}
            >
              Home
            </Button>
            <Button type="ghost" size="small" icon={<LockOutlined />}>
              lock
            </Button>
          </Space>
        </div>
        <Menu
          selectable={true}
          defaultSelectedKeys={this.defaultSelectedKeys}
          onSelect={this.onSelectHandler}
          className="brave-moremenus__list"
        >
          <Menu.Divider style={{ margin: '2px 4px' }} />
          <Menu.Item
            key="0"
            className="brave-moremenus-item"
            icon={<ContactIcon />}
          >
            Contacts
          </Menu.Item>

          <Menu.Item
            key="1"
            className="brave-moremenus-item"
            icon={<AssetsIcon />}
          >
            Digital Assets
          </Menu.Item>
          <Menu.Item
            key="2"
            className="brave-moremenus-item"
            icon={<TransactionIcon spin />}
          >
            Transactions
          </Menu.Item>
        </Menu>
      </>
    );
  };

  renderMenus() {
    return;
  }

  render() {
    // const { xxx } = this.props;

    return (
      <>
        <Dropdown
          overlay={this.menus()}
          placement="topRight"
          visible={this.state.moreVisible}
          trigger={['click', 'hover']}
          onVisibleChange={this.moreMenuChangedHandler}
          overlayClassName="brave-moremenus"
        >
          <Button
            className="brave-btn-more"
            type="text"
            shape="circle"
            icon={<MoreOutlined />}
          />

          {/* <MoreOutlined style={{ fontSize: '1.025rem', color: '#fff' }} /> */}
        </Dropdown>
      </>
    );
  }
}
