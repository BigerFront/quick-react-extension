/**
 * Route nested path defined annotation: start with '/' not endwith '/'
 */
export const DEFAULT_ROUTE = '/';

/**
 * Common Nested route path
 */
export const DETAIL_ID_NESTED = '/:id';
export const PAGE_ROOT_NESTED = '/p';

/**Home Routes */
export const HOME_ROUTE = '/home';
export const HOME_CONTACTS_ROUTE = `${HOME_ROUTE}/contacts`;
export const HOME_ASSETS_ROUTE = `${HOME_ROUTE}/assets`;
export const HOME_TRANSACTION_ROUTE = `${HOME_ROUTE}/transactions`;

/** Sign IN OUT */
export const SIGNIN_NESTED = '/signin';
export const SIGNIN_ROUTE = '/signin';

export const LOCK_ROUTE = '/lock';

/** First-setup :/init*/
export const SETUP_ROUTE = '/setup';
export const SETUP_WELCOME_ROUTE = `${SETUP_ROUTE}/welcome`;

export const INIT_ROUTE = '/init';
export const INIT_WELCOME = '/init/welcome';
export const INIT_CREATE_PASS_ROUTE = '/init/create-pass';
export const INIT_IMPORT_WITH_SEED_ROUTE = '/init/create-pass/import-seed';

/** Brave Routes */

/** contacts */
export const CONTACTS_ROOT_ROUTE = '/p/contacts'; // default_route

export const CONTACTS_ROOT_NESTED = '/contacts';

/** Digital Assets */
export const DIGITAL_ROOT_ROUTE = '/digital';

export const DIGITAL_ROOT_NESTED = '/digital';
export const ASSETS_ROOT_NESTED = '/assets';

export const DIGITAL_ASSETS_ROOT_ROUTE = `${DIGITAL_ROOT_ROUTE}/assets`;
export const DIGITAL_ASSETS_VIEW_ROUTE = `${DIGITAL_ROOT_ROUTE}/assets/view/:{id}`;

/** Transaction */
export const TRANSACTION_ROOT_ROUTE = '/p/transactions';
export const TRANSACTION_ROOT_NESTED = '/transactions';

/**Smart contracts */
export const SMART_CONTRACTS_ROOT_NESTED = '/smart';

export const ADDRESS_ROOT_NESTED = '/address';
export const ADDRESS_LIST_NESTED = `${ADDRESS_ROOT_NESTED}/list`;
