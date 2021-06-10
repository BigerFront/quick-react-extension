import React, { Component } from 'react';

import { Avatar, Space, Button } from 'antd';

import { RollbackOutlined, LockOutlined } from '@ant-design/icons';

import BraveToggleMenu from '../toggle-menu';
import logger from '~Lib/log';

import logoSrc from '~Assets/images/brave-blue.png';
import { BRAVE_AVATAR_SIZE } from '../foot-constants';

export default class ToolbarComponent extends Component {
  state = {};

  lockedHandler = () => {
    const { lockBravTroops } = this.props;

    lockBravTroops().then(() => {
      logger.debug('>>>>>>> Locked success>>>>>');
    });
  };

  gobackHandler = () => {
    const { history } = this.props;

    const a = history.goBack();
    logger.debug('>>>>>>> Locked history>>>>>', history, a);
  };

  renderLogo() {
    return (
      <div className="brave-foot-logo">
        <Avatar
          className="brave-avatar"
          src={logoSrc}
          size={BRAVE_AVATAR_SIZE}
          gap={4}
        />
      </div>
    );
  }

  renderStatusInfo() {
    return (
      <div className="brave-foot__status">
        <span>hhhh</span>
      </div>
    );
  }

  renderButtonGroup() {
    return (
      <Space size={0} className="brave-foot-btn--group">
        {/* <Button
          type="text"
          shape="circle"
          icon={<RollbackOutlined />}
          size="small"
          onClick={this.gobackHandler}
        ></Button> */}
        <Button
          type="text"
          shape="circle"
          icon={<LockOutlined />}
          size="small"
          onClick={this.lockedHandler}
        ></Button>
        <BraveToggleMenu />
      </Space>
    );
  }

  render() {
    // const { xxx } = this.props;

    return (
      <>
        {this.renderLogo()}
        {this.renderStatusInfo()}
        {this.renderButtonGroup()}
      </>
    );
  }
}
