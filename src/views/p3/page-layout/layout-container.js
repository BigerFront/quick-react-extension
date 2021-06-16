import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LayoutPage from './page-layout.jsx';

/**
 *
 * @module: main-layout
 * @Created: lanbery 21-06-09 15:19 Wednesday
 * make state inject into react dom props
 *
 */
const mapStateToProps = (state, ownProps) => {
  const { braveState } = state; // global state contains braveState,skinState ... ed.

  console.log('**********************>>>>', ownProps);
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
)(LayoutPage);
