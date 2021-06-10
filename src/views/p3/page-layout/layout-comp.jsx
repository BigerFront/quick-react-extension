import React, { PureComponent } from 'react';

import { Layout, Avatar, Button } from 'antd';

import { RollbackOutlined } from '@ant-design/icons';
import AuthRoute from '~P3/auth';

import { ContactIcon } from '~Widgets/svgicons';

import logoSrc from '~Assets/images/brave-blue.png';
import MoreDropdown from './more-menu';

const { Header, Content, Footer } = Layout;

export default class LayoutPage extends PureComponent {
  state = {};

  renderHeader() {
    return (
      <>
        <div className="navicon-box">
          <ContactIcon />
        </div>

        <h3 className="nav-label">main-layout Header</h3>
      </>
    );
  }

  renderContent() {
    return <></>;
  }

  renderFooter() {
    return (
      <>
        <div className="brave-logo">
          <Avatar className="brave-avatar" src={logoSrc} size={32} gap={4} />
        </div>
        <div className="brave-status-box"></div>
        <div className="brave-btns-box">
          <Button
            type="text"
            shape="circle"
            icon={<RollbackOutlined />}
          ></Button>
          <MoreDropdown />
        </div>
      </>
    );
  }

  render() {
    // const { xxx } = this.props;

    return (
      <Layout className="brave-main">
        <Header className="brave-main__header">{this.renderHeader()}</Header>
        <Content className="brave-main__content"></Content>
        <Footer className="brave-main__footer">{this.renderFooter()}</Footer>
      </Layout>
    );
  }
}
