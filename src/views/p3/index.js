import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import { hot } from 'react-hot-loader';

import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { history } from '../../Popup/index';
import logger, { isDevMode } from '~Lib/log';

import envConf from '~Lib/env-conf';

class Index extends PureComponent {
  state = {};

  componentDidMount() {
    logger.debug('Entry P3 store >>envConf>>>>', envConf);
    const { store } = this.props;
    if (isDevMode) {
      this.unsubscribe = store.subscribe(() => {
        logger.debug('Entry P3 store >>>>>>', store.getState());
      });
    }
  }

  componentWillUnmount() {
    if (isDevMode && this.unsubscribe) {
      logger.debug(typeof this.unsubscribe);
      this.unsubscribe();
    }
  }

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(Index);
