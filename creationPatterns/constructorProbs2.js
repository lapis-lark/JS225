/*
function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}

let shape = Triangle.prototype;
shape.getType = function() {
  return this.type;
}

shape.getPerimeter = function() {
  return this.a + this.b + this.c;
}



let t = new Triangle(3, 4, 5);
t.constructor;                 // Triangle(a, b, c)
shape.isPrototypeOf(t);        // true
t.getPerimeter();              // 12
t.getType();                   // "triangle"

// prob 2
console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);

*/

// prob 3
function User(first, last) {
  if (!(this instanceof User)) { // scope safe babyyyy
    return new User(first, last);
  }

  this.first = first;
  this.last = last;
}

User.prototype.name = function() {
  return `${this.first} ${this.last}`;
}

let she = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(she);         // => Jane Doe
console.log(user1.name());   // => John Doe
console.log(user2.name());   // => John Doe

// prob 4

/*
function createObject(proto) {
  let newObj = {};
  Object.setPrototypeOf(newObj, proto);
  return newObj;
}

let foo = {
  a: 1
};

let bar = createObject(foo);
foo.isPrototypeOf(bar);         // true


function createObject(proto) {
  let Temp = function () {};
  Temp.prototype = proto;
  return new Temp();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
foo.isPrototypeOf(bar);         // true



// prob 5


let foo = {
  a: 1,
};

foo.begetObject = function() {
  function Temp() {};
  Temp.prototype = this;
  return new Temp();
}

let bar = foo.begetObject();
foo.isPrototypeOf(bar);         // true
*/

// prob 6

function neww(constructor, args) { // new creates an object and calls the constructor on it
  let newObj = Object.create(constructor.prototype);
  Person.call(newObj, ...args);
  return newObj;

}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}