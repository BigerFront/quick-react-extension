import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';

import AuthRoute from '~P3/auth';

import { ContactIcon } from '~Widgets/svgicons';

import { comboNestedRoutes } from '~Lib/utils/route-helper';

import { PAGE_LAYOUT_TYPE } from '../footer/constants';

import Error404 from '~P3/error/not-found';
import SmartContractList from '~P3/contracts/smart-contract';
import AddressList from '~P3/address/list-view';
import PageToolbar from '../footer/comm-toolbar';
import ProfilePage from '../profile';

import {
  SMART_CONTRACTS_ROOT_NESTED,
  ADDRESS_LIST_NESTED,
  PROFILE_ROOT_NESTED,
} from '~P3/routes/routes-consts';

const { Footer } = Layout;

export default class LayoutPage extends PureComponent {
  state = {};
  renderMainRoutes() {
    const { match } = this.props;
    const { path } = match;

    return (
      <Switch>
        <AuthRoute
          path={comboNestedRoutes(path, ADDRESS_LIST_NESTED)}
          component={AddressList}
          exact
        />
        <AuthRoute
          path={comboNestedRoutes(path, SMART_CONTRACTS_ROOT_NESTED)}
          component={SmartContractList}
        />
        <AuthRoute
          path={comboNestedRoutes(path, PROFILE_ROOT_NESTED)}
          component={ProfilePage}
        />
        <AuthRoute path={path} component={AddressList} exact />

        <Route component={Error404} />
      </Switch>
    );
  }

  renderFooter() {
    const { isUnlocked } = this.props;
    return isUnlocked ? <PageToolbar layoutType={PAGE_LAYOUT_TYPE} /> : null;
  }

  render() {
    return (
      <Layout className="brave-main">
        <Layout className="brave-main__content">
          {this.renderMainRoutes()}
        </Layout>
        <Footer className="brave-main__footer">{this.renderFooter()}</Footer>
      </Layout>
    );
  }
}
