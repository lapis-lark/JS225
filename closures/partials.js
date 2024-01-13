function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

greet('aloha', 'lilo');

let sayAloha = greet.bind(null, 'aloha');

sayAloha('toma');

let sayKonnichiha = function (name) {
  return greet('konnichiha', name);
}

sayKonnichiha('yumiko');

// practice problem 1

function subtract(a, b) {
  return a - b;
}

function makeSub(subAmount) {
  return function(subFrom) {
    return subtract(subFrom, subAmount);
  }
}

const sub5 = makeSub(5);

// sub5(10); // 5
// sub5(20); // 15

// practice problem 2

function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  }
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);
let divideBy2 = makePartialFunc(divide, 2);

multiplyBy5(100); // 500
divideBy2(100); // 50

// practice problem 5

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function (students) {
    rollCall('Math', students);
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan