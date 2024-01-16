/*
function getDefiningObject(object, propKey) {
  while (Object.getPrototypeOf(object) !== null) { 
    if (Object.hasOwn(object, propKey)) {
      return object;
    }

    object = Object.getPrototypeOf(object);
  }

  return null;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null
*/

// shallow copy
/*
function shallowCopy(object) {
  let newObj = Object.create(Object.getPrototypeOf(object));
  Object.entries(object).forEach(([key, value]) => {
    newObj[key] = value;
  })
  
  return newObj;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
baz.hasOwnProperty('a');  // false
baz.hasOwnProperty('b');  // false
baz.hasOwnProperty('c');  // true

*/

// extend destination
function extend(...objects) {
  let destination = new Object.create(objects[0]);
  for (object of objects) {
    
  }
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe

