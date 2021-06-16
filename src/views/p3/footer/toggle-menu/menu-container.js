import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { lockBraveTroops } from '~Store/actions/brave-action';

import MenuComponent from './menu-comp.jsx';

/**
 *
 * @module: toggle-menu
 * @Created: lanbery 21-06-10 21:05 Thursday
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
    lockBravTroops: () => dispatch(lockBraveTroops()),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(MenuComponent);
