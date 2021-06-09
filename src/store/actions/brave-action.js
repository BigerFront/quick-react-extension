import {
  LOCK_BRAVE_TROOPS,
  UNLOCK_IN_PROGRESS,
  UNLOCK_FAILED,
  UNLOCK_SUCCESS,
} from '../core-acticon-types';

import logger from '~Lib/log';

export const lockBraveTroops = async () => (dispatch) => {
  return {
    type: LOCK_BRAVE_TROOPS,
    payload: {
      isUnlocked: false,
    },
  };
};

export const tryUnlockBraveTroops = (password) => (dispatch) => {
  if (password === '1234') {
    dispatch(unlockSuccessed());
  } else {
    dispatch(unlockFailed('Pwd Incorrect'));
  }
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

/** Async actions */
export function unlockByPass(password) {
  return async function tryUnlockBrave(dispatch, getSate) {
    const postData = { password };
    try {
      const respData = await await fetch(
        'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
      );

      if (password !== '1234') {
        throw new Error(`Password ${password} incorrect.`);
      }
      logger.debug('response>>>>>>>>>>>>>>>', respData);
      dispatch(unlockSuccessed());
      return respData.json();
    } catch (err) {
      const message = err.message;
      logger.debug('testUnlock>>Error>>', message);
      dispatch(unlockFailed(message));
    }
  };
}
