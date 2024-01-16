/*
  Object.create() is used to make child objects from an object (but not functions?)
  
  functions all have a prototype property . . .
  created objects automatically have a constructor property that points to . . . their prototype?

  what property of an object allows it to follow the prototype chain looking for methods?
  it's not .prototype . . . but and Object.getPrototypeOf can find the prototype

  by default, created objects have Object.prototype as their prototype AND
  functions have Function.prototype as their prototype 

  it's common to organize js objects by separating methods and data

  the method lookup chain looks in both parent objects and their prototypes?
  or wait, parent objects are the prototypes?

  define a prototype object, then use Object.create to make instances

  prototypes are about the methods, instances about the data (typically)
  can initialize Objects with specific properties like this:
  const me = Object.create(person, {job: {value: 'TBD'}});

  more commonly, a constructor method is used to initialize objects
  for example:
  let AnswerPrototype = {
    constructor(value) {
      this._val  = value;
    },
    // other methods
  }

  let lifeAnswer = Object.create(AnswerPrototype);
  lifeAnswer.constructor(42);

*/

let parent = {
  get() {
    return this.val;
  },
  val: 42,
}

let child = Object.create(parent);
child.val = Math.PI;

let grandchild = Object.create(child);

console.log(parent.constructor);
console.log(child.get());
console.log(grandchild instanceof Object);

// The Classical Model

/*
  the new keyword instantiates an object and then runs constructor methods automatically
    (must do separately in the prototypal model above)
  
  whenever you create a function in JS, you also create a function prototype object
  that the function's prototype property points to
  
  this prototype has a constructor property that points back at the function
  can store other functions in the prototype, just comes with constructor prop. . .
  
  basically just a shorter way of doing what the prototypal model does?
  this prototype can be unused (for regular functions), but if the function is intended to be 
  a constructor, it is capitalized by convention

  prototypes fulfill the role of classes .. .?
*/

function Answer(value) { // i'm the constructor!!!
  this._val = value;
}

Answer.prototype.get = function () { // i store the methods!!!
  return this._val;
}

let lifeAnswer = new Answer(42); // new instantiates and runs the constructor method!
                                 // and does other things . . . something with `this`?
                                 // 
console.log(Object.getPrototypeOf(lifeAnswer));

function FirmAnswer(value) {
  Answer.call(this, value);
}

FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;