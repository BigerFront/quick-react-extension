import {
  SET_BRAVE_LOCKED,
  UNLOCK_SUCCESS,
  UPD_BRAVE_STATE,
  SETUP_COMPLETED,
  SET_BRAVE_ACC_ENABLE,
  SET_CURRENT_CHAIN_ID,
  SET_CURRENT_LOCALE,
} from '../../core-acticon-types';

/**
 * this reducer cached the Extension UI core logic state,but not ui
 * UI please used skinState
 * @param {*} state
 * @param {*} param1
 * @returns
 */
export default function reduceBraveTroops(state = {}, { type, payload = {} }) {
  const braveState = {
    currentLocale: '',
    completedOfSetup: false,
    isUnlocked: false,
    isInitialized: false,
    ...state,
  };

  switch (type) {
    case SET_CURRENT_LOCALE: {
      return {
        ...braveState,
        currentLocale: payload.currentLocale,
      };
    }
    case SETUP_COMPLETED:
      return {
        ...braveState,
        completedOfSetup: true,
      };
    case SET_BRAVE_LOCKED:
      return {
        ...braveState,
        isUnlocked: false,
      };
    case UNLOCK_SUCCESS:
      return {
        ...braveState,
        isUnlocked: true,
      };
    case SET_BRAVE_ACC_ENABLE:
      return {
        ...braveState,
        isInitialized: true,
        isUnlocked: true,
      };
    case SET_CURRENT_CHAIN_ID: {
      return {
        ...braveState,
        ...payload,
      };
    }
    default:
      return braveState;
  }
}

export const getCurrentLocale = (state) => state.braveState.currentLocale;
