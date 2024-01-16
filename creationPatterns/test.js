function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.first = first;
  this.last = last;
}

User.prototype.name = function() {
  return `${this.first} ${this.last}`;
}

let she = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(she);         // => Jane Doe
console.log(user1.name());   // => John Doe
console.log(user2.name());   // => John Doe