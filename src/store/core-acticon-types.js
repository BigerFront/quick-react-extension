export const APP_LOCK = 'app/lock';

/**
 * @deprecated Brave lock
 */
export const APP_UNLOCK = 'app/unlock';

/**
 * Brave troops need storage localeStorage
 * brave/xxx/xx
 **/

export const UNLOCK_BRAVE_TROOPS = 'brave/unlock';
export const SET_BRAVE_LOCKED = 'brave/locked';
export const UNLOCK_IN_PROGRESS = 'brave/unlock_in_progress';
export const UNLOCK_FAILED = 'skin@unlock_failed';
export const UNLOCK_SUCCESS = 'brave/unlock_success';

export const SET_CURRENT_LOCALE = 'brave/locale/set_current';

export const SET_CURRENT_CHAIN_ID = 'brave/network/set_chainid';

/** INIT */
export const UPD_BRAVE_STATE = 'brave/update_all';
export const SETUP_COMPLETED = 'brave/setup/completed';
export const SET_BRAVE_ACC_ENABLE = 'brave/account/enabled';

/** skin state operation */
export const SET_BRAVE_THEME = 'skin@theme/set_brave_theme';

export const UI_OPEN_SIDEBAR = 'ui/sidebar/open';
export const UI_CLOSE_SIDEBAR = 'ui/sidebar/close';
export const UI_SET_DEMOTITLE = 'ui/demo/set_title';

export const SET_I18N_KEY = 'app/locale/set_i18n_key';

export const TASK_ADD_ITEM = 'tasks/add_task';

export const TASK_CHANGE_ITEM_PROPS = 'tasks/change_task_props';
export const TASK_INVALID_ITEM = 'tasks/invalidate_task';
export const TASK_COMPLETE_ITEM = 'tasks/complete_task';
export const TASK_SET_FILTER = 'tasks/set_filter';

/**
 * Skin state only cached on runtime
 * skin@xxxx/xx
 **/
export const UI_SET_FOOT_LABEL = 'skin@foot/set_label';
