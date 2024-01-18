/*
  why is this not the arr but the outer object in this example?

*/
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    (function() { console.log(this)})(); // globalThis
    return [1, 2, 3].map(number => { 
      console.log(this); // franchise obj, not arr
    });
  },
};

// probably because iterative methods assign their context as this; the object they iterate
// over is accessible in other ways (third arg of callback function)