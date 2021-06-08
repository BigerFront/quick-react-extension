import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SigninComponent from './signin-comp.jsx';

import { tryUnlockBraveTroops } from '~Store/actions/brave-action';

/**
 *
 * @module: signin
 * @Created: lanbery 21-06-07 12:49 Monday
 * make state inject into react dom props
 *
 */
const mapStateToProps = (state) => {
  const { braveState } = state; // global state contains braveState,skinState ... ed.

  return {
    ...braveState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tryUnlockBrave: (password) => dispatch(tryUnlockBraveTroops(password)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SigninComponent);
