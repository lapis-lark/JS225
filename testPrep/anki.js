/*
  TO REVIEW: stack/heap storage, why that matters in relation to garbage collection
             creating objects with the pseudo-classical pattern without ES6 syntax
             uses of the word prototype



OOP advantages: easier to see the relationship between different parts of program
                  reduces redundancy, makes method sharing easier (useful when many similar objs)
                  increases maintainability due to smaller codebase/places requiring updates
  
  Object factory functions disadvantages (2):
    no way of knowing which "class" an object is an instance of, which function produced it based on returned object
    each object produced has its own copy of all methods/variables it has access to (inefficient)

  strict mode changes the implicit execution context to undefined 
  outside of the global scope; in the global scope, however this is still global/window
  
  the implicit execution context of methods is the object they are a property of

  implicit execution context is determined at the time of execution, not at the time of definition

  execution context can be set explicitly with bind, call, and apply
  call and apply both call the function with an argument that sets the execution context
  (a thisArg). bind returns a new function which is equivalent to the original except
  that the execution context will always be that originally supplied to bind, even if 
  an override is attempted with call/apply

  how can a function lose its context?
    1. it is removed from the object it was a method of
    2. it is passed into a function as an argument
    3. it is defined and executed within another function (context does not extend, implicitly executes in global context)

  dealing with context loss from object extraction:
    1. use call/apply/bind (especially bind if passing into other functions)
    2. add a new parameter for the receiving method that determines context

  dealing with internal function context loss:
    1. use an arrow function
    2. use call/apply
    3. preserve context with local scope variable
    4. use bind (ideally on definition)
  
  dealing with function as argument context loss
    1. use bind
    2. use a local variable to preserve context
    3. pass in context
    4. use an arrow function

  the interesting thing about context loss from internal functions, for example, is that while
  context is lost, scope remains unchanged; they are totally separate concepts

   what happens when a constructor function is called with new?
    1. a new object is created
    2. this is set to point at the new object
    3. the constructor function runs (and the objects prototype is set to constructor.prototype)
    4. this is returned unless the constructor explicitly returns another OBJECT

  which variables in one's program are provided by CommonJS?
    1. module
    2. __dirname
    3. __filename
    4. require
    5. exportss



*/

function makePizza(toppings, size) {
  return {
    toppings,
    size,
    melt() {
      console.log('oooh that cheese is melting nicely!');
    }
  }
}

let pepperoni = makePizza('pepperoni n cheddar', 'extra large');
console.log(pepperoni.toppings);
pepperoni.melt();

function makeGuitar(maker, model, strings = 6) {
  return {
    maker,
    model,
    strings,
    strum() {
      console.log('you strum the guitar. lovely music issues forth.');
    },
    info() {
      console.log(`this bad boy is a ${strings}-stringed ${maker} ${model}!!`);
    }
  }
}

let fender = makeGuitar('fender', 'zx turbo ultraaaa', 12);
fender.strum();
fender.info();