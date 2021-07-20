import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  DEFAULT_ROUTE,
  SETUP_ROUTE,
  PAGE_ROOT_NESTED,
} from './routes-consts';

import HomeLayout from '../home/layout';
import SetupLayout from '../first-setup/layout';
import MainPageLayout from '../page-layout';

import SigninComponent from '~P3/signin';

export default class RoutesComp extends PureComponent {
  renderRoutes() {
    const routes = (
      <Switch>
        <Route path={PAGE_ROOT_NESTED} component={MainPageLayout} />
        <Route path={SETUP_ROUTE} component={SetupLayout} />

        {/** Keep DEFAULT_ROUTE at last */}
        <Route path={DEFAULT_ROUTE} component={HomeLayout} />
      </Switch>
    );

    return routes;
  }

  render() {
    return <>{this.renderRoutes()}</>;
  }
}
