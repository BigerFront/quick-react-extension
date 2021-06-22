import React, { Component } from 'react';

import { Avatar, Space, Button } from 'antd';
import { FormattedMessage } from 'react-intl';

import {
  RollbackOutlined,
  HomeOutlined,
  LockOutlined,
} from '@ant-design/icons';

import BraveToggleMenu from '../toggle-menu';
import logger from '~Lib/log';

import logoSrc from '~Assets/images/brave-blue.png';
import { BRAVE_AVATAR_SIZE } from '../foot-constants';

import { HOME_LAYOUT_TYPE, PAGE_LAYOUT_TYPE } from '../constants';
import {
  DEFAULT_ROUTE,
  CONTACTS_ROOT_NESTED,
} from '../../routes/routes-consts';

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

  gohomeHandler = () => {
    const { history } = this.props;
    history.push(DEFAULT_ROUTE);
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

  renderToolbarBtns(layoutType) {
    const { location } = this.props;

    const isHomeIndex =
      location.pathname === DEFAULT_ROUTE ||
      location.pathname === CONTACTS_ROOT_NESTED;
    switch (layoutType) {
      case HOME_LAYOUT_TYPE: {
        return (
          <Button
            type="text"
            shape="circle"
            icon={<LockOutlined />}
            size="small"
            onClick={this.lockedHandler}
          ></Button>
        );
      }
      case PAGE_LAYOUT_TYPE: {
        return (
          <>
            <Button
              type="text"
              shape="circle"
              icon={<RollbackOutlined />}
              size="small"
              onClick={this.gobackHandler}
            ></Button>
            {isHomeIndex ? null : (
              <Button
                type="text"
                shape="circle"
                icon={<HomeOutlined />}
                size="small"
                onClick={this.gohomeHandler}
              ></Button>
            )}
          </>
        );
      }
      default: {
        return (
          <Button
            type="text"
            shape="circle"
            icon={<LockOutlined />}
            size="small"
            onClick={this.lockedHandler}
          ></Button>
        );
      }
    }
  }

  renderStatusInfo() {
    const { footStatus, footLabel } = this.props;
    return footStatus ? (
      <div className="brave-foot__status">
        <span>{footStatus}</span>
      </div>
    ) : (
      <div className="brave-foot__label">
        {/* <FormattedMessage
          defaultMessage="{footLabel}"
          values={{ footLabel }}
          description="The toggle Menu Name"
        /> */}
        <span>{footLabel}</span>
      </div>
    );
  }

  renderButtonGroup() {
    const { layoutType = HOME_LAYOUT_TYPE } = this.props;
    return (
      <Space size={0} className="brave-foot-btn--group">
        {this.renderToolbarBtns(layoutType)}
        <BraveToggleMenu showHome layoutType={layoutType} />
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
