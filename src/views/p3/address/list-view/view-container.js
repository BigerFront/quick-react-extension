import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ViewPage from './view-comp.jsx';



/**
 *
 * @module: list-view
 * @Created: lanbery 21-06-16 13:35 Wednesday
 * make state inject into react dom props
 *
 */
const mapStateToProps = (state) => {
  const { braveState } = state; // global state contains braveState,skinState ... ed.
  const { keystore = {}, isUnlocked } = braveState;
  // keystore:{keyring,}

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
)(ViewPage);
