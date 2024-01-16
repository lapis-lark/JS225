class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`i'm a cat! my name is ${this.name}!`);
  }

  rename(newName) {
    this.name = newName;
  }

  static genericGreet() {
    console.log(`i'm a cat! meow!`);
  }
}

Cat.testMethod = function () {
  console.log(`test static method :)`);
}

let kitty = new Cat('fluffles');
kitty.greet();
kitty.rename('doodle');
kitty.greet();
Cat.genericGreet();
Cat.testMethod();
// kitty.testMethod(); // error calling a "class" method on an instance; instances look in the prototype chain for methods, but this is just the constructor





// prob 5

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.length * this.width;
  }
}

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25

