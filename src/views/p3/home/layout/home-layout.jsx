import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout, Divider } from 'antd';

import logger from '~Lib/log';
import { comboNestedRoutes } from '~Lib/utils/route-helper';

import HomeBanner from '~P3/home/banner';
import HomeFootToolbar from '~P3/footer/comm-toolbar';

import ContactList from '~P3/contacts/index';
import DigitalAssetList from '~P3/digital-assets/list';
import TransactionsList from '~P3/transactions';
import SmartContractList from '~P3/contracts/smart-contract';
import SigninComponent from '~P3/signin';

import Error404 from '~P3/error/not-found';

import AuthRoute from '~P3/auth';

import {
  SIGNIN_NESTED,
  CONTACTS_ROOT_NESTED,
  ASSETS_ROOT_NESTED,
  TRANSACTION_ROOT_NESTED,
  SMART_CONTRACTS_ROOT_NESTED,
} from '../../routes/routes-consts';

import { HOME_LAYOUT_TYPE } from '../../footer/constants';
import HomeNavLabel from '../content-label';

const { Content, Footer } = Layout;

export default class HomeLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.comboNestedRoutes = comboNestedRoutes.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { history } = this.props;

    if (history) {
      this.unlisten = history.listen((locationObj, action) => {
        // logger.debug(
        //   'Home Layout>>>>>>History listen>>>>>>>',
        //   this.props,
        //   locationObj
        // );
      });
    }
  }

  componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
  }
  renderHeader() {
    return <HomeBanner />;
  }

  renderRoutes() {
    const { match } = this.props;

    const { path } = match;

    return (
      <Switch>
        <AuthRoute
          path={comboNestedRoutes(path, CONTACTS_ROOT_NESTED)}
          component={ContactList}
        />
        <AuthRoute
          path={comboNestedRoutes(path, ASSETS_ROOT_NESTED)}
          component={DigitalAssetList}
        />
        <AuthRoute
          path={comboNestedRoutes(path, TRANSACTION_ROOT_NESTED)}
          component={TransactionsList}
        />
        <Route
          path={comboNestedRoutes(path, SMART_CONTRACTS_ROOT_NESTED)}
          component={SmartContractList}
        />
        <Route
          path={comboNestedRoutes(path, SIGNIN_NESTED)}
          component={SigninComponent}
        />
        <AuthRoute path={path} component={ContactList} exact />
        <Route component={Error404} />
      </Switch>
    );
  }

  render() {
    const { isUnlocked } = this.props;
    return (
      <Layout className="home-layout">
        <div className="home-layout__banner--wrapper">
          {this.renderHeader()}
        </div>
        <HomeNavLabel />
        <Divider className="brave-divider" style={{ marginTop: '0' }} />
        <Content className="home-layout__main">{this.renderRoutes()}</Content>
        <Footer className="home-layout__footer">
          {isUnlocked ? (
            <HomeFootToolbar layoutType={HOME_LAYOUT_TYPE} />
          ) : null}
        </Footer>
      </Layout>
    );
  }
}
