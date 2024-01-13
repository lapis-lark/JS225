(function() {
  console.log("Sometimes, syntax isn't intuitive!")
}());

// p3


var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

let x = sum + (function (arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(x);
// sum += sum(numbers);  // ?

// p4
function countdown(n) {
  (function minusOne() {
    console.log(n);
    if (n === 0) {
      console.log('done!');
      return;
    }
    minusOne(n -= 1);
  }());
}

countdown(7);