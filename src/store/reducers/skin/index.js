import {
  UPD_BRAVE_BLOCKED,
  UI_OPEN_SIDEBAR,
  UI_CLOSE_SIDEBAR,
  UNLOCK_FAILED,
  UI_SET_FOOT_LABEL,
} from '../../core-acticon-types';

export default function reduceSkin(state = {}, { type, payload = {} }) {
  const skinState = {
    uiBlocked: false,
    sidebar: {
      isOpen: false,
    },
    foot: {
      footLabel: ' ',
      footStatus: '',
    },
    ...state,
  };

  switch (type) {
    case UI_SET_FOOT_LABEL: {
      const { foot } = skinState;
      foot.footLabel = payload.footLabel;
      return {
        ...skinState,
        foot,
      };
    }
    case UPD_BRAVE_BLOCKED: {
      const { uiBlocked } = payload;
      return {
        ...skinState,
        uiBlocked: Boolean(uiBlocked),
      };
    }

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
