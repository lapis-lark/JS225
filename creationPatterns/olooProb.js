// oloo
/*
let PetPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },
  sleep() {
    console.log('i sleeep')
  },
  wake() {
    console.log('i wek');
  },
}

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake
*/

// pseudo-classical
let Pet = function(animal, name) {
  this.animal = animal;
  this.name = name;
}

Pet.prototype = {
  sleep() {
    console.log('i sleeep')
  },
  wake() {
    console.log('i wek');
  },
}
Pet.prototype.constructor = Pet;

let pudding = new Pet('cat', 'pudding');
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = new Pet('fish', 'neptune');
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake


