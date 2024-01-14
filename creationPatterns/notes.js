/*
  disadvantages of factory functions:
    difficult to know what "type" an object is 
    each object has all of the methods leading to redundancy






*/

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?