import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SelectorPage from './selector-comp.jsx';

import { NETWORK_KEY_MAP, MAINNET_ETH_CHAIN_ID } from './index';
import { setCurrentChainId } from '~Store/actions/brave-action';
/**
 *
 * @module: network-selector
 * @Created: lanbery 21-06-11 10:13 Friday
 * make state inject into react dom props
 *
 */
const mapStateToProps = (state) => {
  const { braveState } = state; // global state contains braveState,skinState ... ed.
  const { currentChainId = MAINNET_ETH_CHAIN_ID } = braveState;

  const keys = Object.keys(NETWORK_KEY_MAP);
  const networks = keys.map((k) => {
    let nw = NETWORK_KEY_MAP[k];
    nw.chainId = parseInt(k);

    return nw;
  });

  return {
    currentChainId,
    networks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    networkSelected: (currentChainId) =>
      dispatch(setCurrentChainId(currentChainId)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SelectorPage);
