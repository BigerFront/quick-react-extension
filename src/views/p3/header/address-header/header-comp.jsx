import React, { PureComponent } from 'react';

import { Layout, Space } from 'antd';

const { Header } = Layout;

export default class HeaderPage extends PureComponent {
  state = {};

  render() {
    const { title, className } = this.props;

    const IconOverlay = this.props.iconOverlay;
    const BtnOverlay = this.props.btnOverlay;

    const wrapperClassName = className
      ? `brave-header ${className}`
      : 'brave-header';

    return (
      <Header className={wrapperClassName}>
        <div className="brave-header__title--wrapper">
          {IconOverlay ? <IconOverlay /> : null}
          <span className="header-title">{title}</span>
        </div>
        <Space className="brave-header__btns">
          {BtnOverlay ? <BtnOverlay /> : null}
        </Space>
      </Header>
    );
  }
}
