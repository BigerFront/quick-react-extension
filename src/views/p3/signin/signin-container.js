import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SigninComponent from './signin-comp.jsx';

import { unlockByPass, autoUnlocked } from '~Store/actions/brave-action';

/**
 *
 * @module: signin
 * @Created: lanbery 21-06-07 12:49 Monday
 * make state inject into react dom props
 *
 */
const mapStateToProps = (state) => {
  const {
    braveState: { isUnlocked },
  } = state; // global state contains braveState,skinState ... ed.

  return {
    isUnlocked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tryUnlockBrave: (password) => dispatch(unlockByPass(password)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SigninComponent);
