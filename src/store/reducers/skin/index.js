import {
  SET_BRAVE_THEME,
  UI_OPEN_SIDEBAR,
  UI_CLOSE_SIDEBAR,
  UNLOCK_FAILED,
  UI_SET_FOOT_LABEL,
} from '../../core-acticon-types';

export default function reduceSkin(state = {}, { type, val }) {
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
    case SET_BRAVE_THEME: {
      return {
        ...skinState,
        braveTheme: val,
      };
    }
    case UI_SET_FOOT_LABEL: {
      const { foot } = skinState;
      foot.footLabel = val || '';
      return {
        ...skinState,
        foot,
      };
    }

    case UNLOCK_FAILED:
      return {
        ...skinState,
        warning: val || 'Incorrect password.Try again.',
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
