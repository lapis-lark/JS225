/*

  first class functions = whether a language allows functions to be stored in variables,
    passed around
  higher order functions = specific functions can be higher order, meaning that they
    operate on functions and/or return functions

  closures can create data that is impossible to access by anything but a given function

*/

function makeCounterLogger(count) {
  return function (n) {
    if (n >= count) {
      for (; n >= count; n -= 1) {
        console.log(n);
      }
    } else if (n < count) {
      for (; n <= count; n += 1) {
        console.log(n);
      }
    }
  }
}