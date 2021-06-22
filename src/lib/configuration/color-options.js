export const DARK_OPTIONS = {
  luminosity: 'dark',
  format: 'rgba',
};

export const LIGHT_OPTIONS = {
  luminosity: 'light',
  format: 'rgba',
  alpha: 0.6,
};

/**
 *
 * @param {number} count
 * @param {string|Object} option optional
 *
 * @returns
 */
export function getColorOpts(count = 1, option) {
  let opts = DARK_OPTIONS;
  if (typeof option === 'object') {
    opts = Object.assign({}, opts, { count: count }, option);
  } else if (
    typeof option === 'string' &&
    ['light', 'dark', 'bright'].includes(option)
  ) {
    opts = Object.assign({}, opts, { count: count, luminosity: option });
  } else {
    opts = Object.assign({}, opts, { count: count });
  }

  return opts;
}
