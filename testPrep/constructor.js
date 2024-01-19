function Dog() {
  this.species = 'dog';
}

Dog.prototype.woof = function() {
  console.log('arf woof bark wan');
}

let fluf = new Dog;

console.log(fluf.__proto__); 