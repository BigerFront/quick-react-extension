import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ListPage from './list-comp.jsx';

/**
 *
 * @module: list
 * @Created: lanbery 21-06-04 12:54 Friday
 * make state inject into react dom props
 *
 */
const mapStateToProps = (state) => {
  const { braveState } = state; // global state contains braveState,skinState ... ed.

  const tokens = braveState.tokens || []
  return {
    tokens,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ListPage);
