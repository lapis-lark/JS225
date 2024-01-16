// prob 7
/*
class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat.prototype, {name: {value: 'fluffles'}});



console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.



class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, color) {
    super(name, age);
    this.color = color
  }

  info() {
    return `my cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());


class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    let intro = super.introduce(); 
    return `${intro} Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  greetMaster() {
    return `hello ${this.master}! woof woof!`; 
  }
}

let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce()) //=== "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true

let dog = new Dog('paco', 4, 'chilling', 'daniel');
console.log(dog.introduce());
console.log(dog.greetMaster());



class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    console.log(`${this.make} ${this.model}`);
    return `${this.make} ${this.model}`;
  }
}

class Car {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}


class Person {
  constructor() {}
  greeting(text) {
    console.log(text);
  }
}

class Shouter extends Person {
  greeting(text) {
    super.greeting(text.toUpperCase());
  }
}

let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.
*/
class Shelter {
  constructor() {
    this.adoptions = {};
  }

  adopt(owner, pet) {
    owner.pets.push(pet);
    this.adoptions[owner.name] = owner.pets;
  }

  printAdoptions() {
    Object.entries(this.adoptions).forEach(([owner, pets]) => {
      console.log(`${owner} has adopted the following pets:`)
        pets.forEach(pet => console.log(`a ${pet.animal} named ${pet.name}`));
    });
  }
}

class Pet {
  constructor(animal, name) {
    this.name = name;
    this.animal = animal;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length;
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

// prob 14

class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+-${'-'.repeat(this.message.length)}-+`
  }

  emptyLine() {
    return `| ${' '.repeat(this.message.length)} |`
  }

  messageLine() {
    return `| ${this.message} |`
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();