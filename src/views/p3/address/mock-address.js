const AddressMap = {
  '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01': {
    pubkey: '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01',
    alias: 'mask',
    type: 1,
    sortno: 1,
  },
  '0xb8CE9ab6943e0eCED004cDe8e3bBed656802FaF8': {
    pubkey: '0xb8CE9ab6943e0eCED004cDe8e3bBed656802FaF8',
    alias: 'bob',
    type: 1,
    sortno: 2,
  },
  '0x101aDdC5e5E4749A8BB4cb40c71f467663B05eBa': {
    pubkey: '0x101aDdC5e5E4749A8BB4cb40c71f467663B05eBa',
    alias: 'alice',
    type: 1,
    sortno: 3,
  },
  '0x16664a4f068f27e101DDc64298425a62b3AcA800': {
    pubkey: '0x16664a4f068f27e101DDc64298425a62b3AcA800',
    alias: 'net',
    type: 1,
    sortno: 4,
  },
};

export function mockAddress() {
  let addrs = Object.values(AddressMap).sort((a, b) => {
    if (a.sort !== undefined && b.sortno !== undefined) {
      return a.sortno >= b.sortno ? 1 : -1;
    } else if (a.sort === undefined && b.sortno !== undefined) {
      return -1;
    } else if (a.sort !== undefined && b.sortno === undefined) {
      return 1;
    }

    return 0;
  });
  return addrs;
}
