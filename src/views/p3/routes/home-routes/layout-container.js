import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import logger from '~Lib/log';

import HomeLayout from './home-layout';

const mapStateToProps = (state) => {
  const { braveState = {} } = state;

  const { isUnlocked, isInitialized } = braveState;

  logger.debug('home map inject>>isUnlocked>>>>', isUnlocked, isInitialized);

  return {
    isUnlocked,
    isInitialized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HomeLayout);
