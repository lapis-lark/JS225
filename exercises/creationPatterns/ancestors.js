// name property added to make objects easier to identify
const foo = {name: 'foo'};
foo.ancestors = function() {
  let arr = [];
  let self = this;
  while (Object.getPrototypeOf(self).name !== undefined) {
    arr.push(Object.getPrototypeOf(self).name)
    self = Object.getPrototypeOf(self);
  }

  arr.push('Object.prototype');
  return arr;
}
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';



qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']

