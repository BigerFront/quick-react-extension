import tokens from '~Lib/coins';

import { BLUE_LOGO_THEME } from '~UI/ui-cnst';
const initialAppState = {
  braveState: {}, // app storage sync ui state
  skinState: {
    braveTheme: BLUE_LOGO_THEME,
  }, // ui ctrl state,Do not participate in logical calculations
  // skinState: {}, // core state
  localeMessages: {}, // i18n state
  taskState: {
    tasks: [
      {
        id: 1,
        title: 'Initial Task One',
        status: 'incomplete',
        created: new Date().getTime(),
      },
    ],
  }, // notify task
};

// initial need background read
initialAppState.braveState.tokens = tokens;

export default initialAppState;
