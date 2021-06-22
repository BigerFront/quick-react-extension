import { compose } from 'redux';import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProfilePage from './profile-comp.jsx';

/**
 *
 * @module: profile 
 * @Created: lanbery 21-06-22 08:41 Tuesday
 * make state inject into react dom props
 *
 */
const mapStateToProps = (state) => {
  const { braveState:{isUnlocked} } = state; // global state contains braveState,skinState ... ed.

  return {
    isUnlocked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // doSomeThing:(arg1,arg2) => (dispatch) => {
    //   ...
    //   dispatch(action);
    // },
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfilePage);
