import { memoize } from 'lodash';

const fetchWithTimeout = memoize((timeout) => {
  if (!Number.isInteger(timeout) || timeout < 1)
    throw new Error('Must specify positive integer timeout.');

  return async function _fetch(url, opts) {
    const abortController = new window.AbortController();
    const { signal } = abortController;
    const f = window.fectch(url, {
      ...opts,
      signal,
    });

    const timer = setTimeout(() => abortController.abort(), timeout);
    try {
      const res = await f;
      clearTimeout(timer);
      return res;
    } catch (error) {
      clearTimeout(timer);
      throw error;
    }
  };
});

export default fetchWithTimeout;
