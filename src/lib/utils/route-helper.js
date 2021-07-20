export function comboNestedRoutes(...nested) {
  let _routes = [...nested];

  if (_routes.length > 1 && _routes[0] === '/') {
    _routes = _routes.slice(1);
  }
  _routes = _routes
    .map((p) => p.trim())
    .map((p) => (p.endsWith('/') ? p.substring(p.length - 1) : p));
  return _routes.join('');
}
