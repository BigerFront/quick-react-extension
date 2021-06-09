import {
  UI_SET_DEMOTITLE,
  UI_OPEN_SIDEBAR,
  UI_CLOSE_SIDEBAR,
  UNLOCK_FAILED,
} from '../../core-acticon-types';

export default function reduceSkin(state = {}, { type, payload = {} }) {
  const skinState = {
    sidebar: {
      isOpen: false,
    },
    demoTitle: 'Demo Show',
    ...state,
  };

  switch (type) {
    case UNLOCK_FAILED:
      return {
        ...skinState,
        warning: payload.message || 'Incorrect password.Try again.',
      };

    case UI_OPEN_SIDEBAR:
      return {
        ...skinState,
        sidebar: { isOpen: true },
      };

    case UI_CLOSE_SIDEBAR:
      return {
        ...skinState,

        sidebar: { isOpen: false },
      };
    default:
      return skinState;
  }
}
