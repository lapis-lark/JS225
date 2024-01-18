function objectsEqual(a, b) {
  a = Object.entries(a).sort();
  b = Object.entries(b).sort();

  if (a.length === 0 && b.length === 0) {
    return true;
  } else if (a.length !== b.length) {
    return false;
  } 


  for (let i = 0; i < a.length; i += 1) {
    [aKey, aVal] = a[i];
    [bKey, bVal] = b[i];

    if (aKey !== bKey || aVal !== bVal) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false