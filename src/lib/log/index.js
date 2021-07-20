import * as Log from 'loglevel';
import { levelMode } from './log-env';

let LEVEL = Log.levels.WARN;

if (levelMode === true || levelMode.toLowerCase() === 'debug') {
  LEVEL = Log.levels.DEBUG;
} else if (levelMode.toLowerCase() === 'info') {
  LEVEL = Log.levels.INFO;
}

Log.setLevel(LEVEL);

export const isDevMode =
  levelMode.toLowerCase() === 'debug' ||
  levelMode === true ||
  levelMode.toLowerCase() === 'true';

export default Log;
