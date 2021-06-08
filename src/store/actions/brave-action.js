import {
  LOCK_BRAVE_TROOPS,
  UNLOCK_IN_PROGRESS,
  UNLOCK_FAILED,
  UNLOCK_SUCCESS,
} from '../core-acticon-types';

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
