const contacts = [
  {
    nick: 'Jessery',
    address: '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01',
    bmail: 'Jessery@dream.eth',
    type: 1,
  },
  {
    nick: 'Bob',
    address: '0xb8CE9ab6943e0eCED004cDe8e3bBed656802FaF8',
    bmail: 'bob_123@btc.cn',
    type: 1,
  },
  {
    nick: 'Berray',
    address: '0x101aDdC5e5E4749A8BB4cb40c71f467663B05eBa',
    bmail: 'berray@btc.cn',
    type: 1,
  },
  {
    nick: 'Jacky',
    address: '0x16664a4f068f27e101DDc64298425a62b3AcA800',
    bmail: 'jacky@btc.cn',
    type: 1,
  },
];

export function getContacts() {
  return contacts.sort((a, b) => {
    return a.alias >= b.alias ? 1 : -1;
  });
}
