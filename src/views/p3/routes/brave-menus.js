import { comboNestedRoutes } from '~Lib/utils/route-helper';
import {
  ContactIcon,
  AssetsIcon,
  TransactionIcon,
  SolidityIcon,
  KeyIcon,
  ProfileIcon,
} from '~Widgets/svgicons';

import {
  PAGE_ROOT_NESTED,
  CONTACTS_ROOT_NESTED,
  ASSETS_ROOT_NESTED,
  TRANSACTION_ROOT_NESTED,
  ADDRESS_LIST_NESTED,
  SMART_CONTRACTS_ROOT_NESTED,
  PROFILE_ROOT_NESTED,
} from '~P3/routes/routes-consts';

const itemClsName = 'brave-dropdown--item';

export const menuItems = [
  {
    key: CONTACTS_ROOT_NESTED,
    name: 'Contacts',
    className: itemClsName,
    icon: ContactIcon,
  },
  {
    key: ASSETS_ROOT_NESTED,
    name: 'Digital Assets',
    className: itemClsName,
    iconProps: { type: 'fill' },
    icon: AssetsIcon,
  },
  {
    key: TRANSACTION_ROOT_NESTED,
    name: 'Transactions',
    className: itemClsName,
    iconProps: { spin: true },
    icon: TransactionIcon,
  },
  {
    divider: true,
  },
  {
    key: comboNestedRoutes(PAGE_ROOT_NESTED, ADDRESS_LIST_NESTED),
    name: 'Address',
    className: itemClsName,
    icon: KeyIcon,
  },
  {
    key: comboNestedRoutes(PAGE_ROOT_NESTED, SMART_CONTRACTS_ROOT_NESTED),
    name: 'Smart Contracts',
    className: itemClsName,
    icon: SolidityIcon,
    iconProps: { spin: true },
    hide: false,
  },
  {
    key: comboNestedRoutes(PAGE_ROOT_NESTED, PROFILE_ROOT_NESTED),
    name: 'Profile',
    className: itemClsName,
    icon: ProfileIcon,
  },
];

export function getMenuName(key) {
  if (typeof key !== 'string') return key;
  const finded = menuItems.find((it) => it.key === key);

  return finded ? finded : { name: key };
}
