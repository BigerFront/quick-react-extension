import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { lockBraveTroops } from '~Store/actions/brave-action';

import ToolbarComponent from './toolbar-comp.jsx';

/**
 *
 * @module: comm-toolbar
 * @Created: lanbery 21-06-10 19:08 Thursday
 * make state inject into react dom props
 *
 */
const mapStateToProps = (state) => {
  const {
    braveState,
    skinState: { foot },
  } = state; // global state contains braveState,skinState ... ed.
  const { isUnlocked } = braveState;
  const { footLabel = '', footStatus = '' } = foot;
  return {
    isUnlocked,
    footLabel,
    footStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    lockBravTroops: () => dispatch(lockBraveTroops()),
    // doSomeThing:(arg1,arg2) => (dispatch) => {
    //   ...
    //   dispatch(action);
    // },
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ToolbarComponent);
