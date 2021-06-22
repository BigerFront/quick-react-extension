import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TransactionsPage from './transactions-comp.jsx';

import { TX_STATUSES } from './tx-constants';

/**
 *
 * @module: transactions
 * @Created: lanbery 21-06-07 13:25 Monday
 * make state inject into react dom props
 *
 */
const mapStateToProps = (state) => {
  const { braveState } = state; // global state contains braveState,skinState ... ed.

  let { txList } = braveState;

  // txList =
  //   txList && txList.length > 0
  //     ? txList
  //     : [
  //         {
  //           hash: '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
  //           timestamp: 1624353207394,
  //           statusText: TX_STATUSES.CONFIRMED,
  //           txData: {
  //             hash: '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
  //             status: false,
  //             blockHash:
  //               '0x023af0a679a52da341a92ac2ec552f91f268c9f9169010f1a61e4289556de0d8',
  //           },
  //         },
  //       ];

  return {
    txList,
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
)(TransactionsPage);
