export function uint8ArrayToHex(arr) {
  if (typeof arr !== 'object' || !(arr instanceof Uint8Array))
    throw new Error('parameter must be Uint8Array');

  return (
    '0x' +
    Array.prototype.map
      .call(arr, function (byte) {
        return ('0' + (byte & 0xff).toString()).slice(-2);
      })
      .join('')
      .toUpperCase()
  );
}

export function getRandomUint8Array(len) {
  if (!window || !window.crypto)
    throw new Error(
      'getRandomUint8Array only used in high browser has crypto. '
    );

  const _len = len > 1 ? len : 20;
  const a = new Uint8Array(_len);

  window.crypto.getRandomValues(a);
  return a;
}


