function myBind(fn, context, ...args) {
  return function() {
    return fn.apply(context, args);
  }
}

let test = {a: 'jon', b: 'kate'};

function greet(ender) {
  console.log(`hi ${this.a}${ender}`);
}

greetJon = myBind(greet, test, '!!!');

greetExcitedly = myBind(greet, null, '!!!');

greetExcitedly('kate');

greetJon();

function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15