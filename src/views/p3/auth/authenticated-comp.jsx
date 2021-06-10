import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { SETUP_ROUTE, SIGNIN_NESTED } from '~P3/routes/routes-consts';
import logger from '~Lib/log';

export default function Authenticated(props) {
  const { isUnlocked, completedOfSetup, history, path } = props;

  logger.debug('Auth>>>>>>>>>>>>>>>>>>>>>>>', path);
  switch (true) {
    case isUnlocked:
      return <Route {...props} />;
    default:
      return <Redirect to={{ pathname: SIGNIN_NESTED }} />;
  }
}
