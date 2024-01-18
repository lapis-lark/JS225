const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map((function(number) { 
      return `${this.name} ${number}`;
    }).bind(this));
  },
};

console.log(franchise.allMovies());

// the function passed into map is not an arrow function, so it does not inherit the context
// map has; since arrow functions don't create their own context but inherit it lexically,
// they will allow this to reference franchise still