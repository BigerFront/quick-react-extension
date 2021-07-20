export const BLUE_LOGO_THEME = 'brave-blue';
export const RED_LOGO_THEME = 'brave-red';
export const GOLDEN_LOGO_THEME = 'brave-golden';

export const BRAVE_AVATAR_TYPES = {
  [BLUE_LOGO_THEME]: {
    id: BLUE_LOGO_THEME,
    theme: 'blue',
  },
  [RED_LOGO_THEME]: {
    id: RED_LOGO_THEME,
    theme: 'red',
  },
  [GOLDEN_LOGO_THEME]: {
    id: GOLDEN_LOGO_THEME,
    theme: 'golden',
  },
};

export function getThemeName(id) {
  return BRAVE_AVATAR_TYPES[id] ? BRAVE_AVATAR_TYPES[id].theme : '';
}

export const BRAVE_AVATAR_THEMES = Object.values(BRAVE_AVATAR_TYPES)