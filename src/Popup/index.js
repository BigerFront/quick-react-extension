import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory, createHashHistory } from 'history';

import Root from '~P3';
import './index.scss';

import initialAppState from '../store/initialState';
import configureStore from '../store/store';

import { UNLOCK_SUCCESS } from '~Store/core-acticon-types';

export const history = createHashHistory();
const store = configureStore(initialAppState, history);

store.dispatch({ type: UNLOCK_SUCCESS });
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app-container')
);
// if (module.hot) module.hot.accept(); // v4
