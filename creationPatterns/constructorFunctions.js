/*









*/

// prob 3
let Circle = function(radius) {
  this.radius = radius;
}

Circle.prototype.area = function () {
  return (this.radius**2 * Math.PI)
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27

// prob 6

/*
let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung
Ninja.prototype.swing = function () {
  this.swung = true;
  return this;
}

console.log(ninjaA.swing().swung);      // must log true
console.log(ninjaB.swing().swung);      // must log true
*/

// prob 7
let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
let ninjaB = 


console.log(ninjaB.constructor === ninjaA.constructor);    // should log true