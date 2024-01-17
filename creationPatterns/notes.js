/*
  disadvantages of factory functions:
    difficult to know what "type" an object is 
    each object has all of the methods leading to redundancy

  new behaviors (methods) can be defined on the prototype of an object
  creating new objects with the same prototype allows access to those methods
  the "prototype pattern" of object creation 

  prototype and constructor properties added automatically to functions in JS? 
    add methods to the prototype to avoid creating duplicates when making new objects with new

  functions possibly preferable to creating objects from object literals because of this
  prototype and constructor must be set manually with this approach... for what benefit? none?

  a function's prototype object will automatically have a constructor property pointing
  at that function; however, if the function is assigned a new prototype, the constructor property
  on the new prototype must be created and set to the function

  

*/

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?