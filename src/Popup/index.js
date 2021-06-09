import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import Root from '~P3';
import './index.scss';

import initialAppState from '../store/initialState';
import configureStore from '../store/store';

export const history = createBrowserHistory();
const store = configureStore(initialAppState, history);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app-container')
);
// if (module.hot) module.hot.accept(); // v4
