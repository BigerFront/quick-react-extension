import {
  SET_BRAVE_LOCKED,
  UNLOCK_IN_PROGRESS,
  UNLOCK_FAILED,
  UNLOCK_SUCCESS,
} from '../core-acticon-types';

import logger from '~Lib/log';

/** Synchronous Actions */
export const setBraveLocked = () => {
  return {
    type: SET_BRAVE_LOCKED,
    payload: {
      isUnlocked: false,
    },
  };
};

export function unlockInProgress() {
  return { type: UNLOCK_IN_PROGRESS };
}

export function unlockFailed(message) {
  return {
    type: UNLOCK_FAILED,
    payload: { message },
  };
}

export function unlockSuccessed() {
  return {
    type: UNLOCK_SUCCESS,
  };
}

/** Asynchronous Actions */
export const lockBraveTroops = () => {
  return async (dispatch, getState) => {
    logger.debug(
      '>>>>>>>>>>>>>>>>>>>>>>>lockBravTroops>>>>>>>>>>>>>>>>>',
      getState()
    );
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(setBraveLocked());
      }, 1000);
    });
  };
};

export function unlockByPass(password) {
  return async function tryUnlockBrave(dispatch, getSate) {
    const postData = { password };
    try {
      const respData = await fetch(
        'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
      );
      logger.debug('response>>>>>>>>>>>>>>>', getSate());

      if (password !== '1234') {
        throw new Error(`Password ${password} incorrect.`);
      }

      dispatch(unlockSuccessed());
      return respData.json();
    } catch (err) {
      const message = err.message;
      // logger.debug('testUnlock>>Error>>', message);
      dispatch(unlockFailed(message));
    }
  };
}
