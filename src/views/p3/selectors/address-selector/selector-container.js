import { compose } from 'redux';import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SelectorPage from './selector-comp.jsx';

/**
 *
 * @module: address-selector 
 * @Created: lanbery 21-06-11 10:13 Friday
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
    // doSomeThing:(arg1,arg2) => (dispatch) => {
    //   ...
    //   dispatch(action);
    // },
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SelectorPage);
