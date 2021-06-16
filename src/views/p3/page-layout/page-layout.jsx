import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout, Button } from 'antd';

import AuthRoute from '~P3/auth';

import { ContactIcon } from '~Widgets/svgicons';

import { comboNestedRoutes } from '~Lib/utils/route-helper';

import { PAGE_LAYOUT_TYPE } from '../footer/constants';

import SmartContractList from '~P3/contracts/smart-contract';
import PageToolbar from '../footer/comm-toolbar';

import { SMART_CONTRACTS_ROOT_NESTED } from '~P3/routes/routes-consts';

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

  renderMainRoutes() {
    const { match } = this.props;
    const { path } = match;

    return (
      <Switch>
        <AuthRoute
          path={comboNestedRoutes(path, SMART_CONTRACTS_ROOT_NESTED)}
          component={SmartContractList}
        />

        <AuthRoute path={path} component={SmartContractList} exact />
      </Switch>
    );
  }

  renderFooter() {
    const { isUnlocked } = this.props;
    return isUnlocked ? <PageToolbar layoutType={PAGE_LAYOUT_TYPE} /> : null;
  }

  render() {
    // const { xxx } = this.props;

    return (
      <Layout className="brave-main">
        <Header className="brave-main__header">{this.renderHeader()}</Header>
        <Content className="brave-main__content">
          {this.renderMainRoutes()}
        </Content>
        <Footer className="brave-main__footer">{this.renderFooter()}</Footer>
      </Layout>
    );
  }
}
