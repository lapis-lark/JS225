function makeMultipleLister(n) {
  let base = n;

  return function () {
    for (; n < 100; n += base ) {
      console.log(n);
    }
  }
}

// let lister = makeMultipleLister(13);
// lister();

function addSubtract() {
  let total = 0;

  let add = function(n) {
    total += n;
    console.log(total);
  }

  let subtract = function(n) {
    total -= n;
    console.log(total);
  }

  return [add, subtract];
}

let [add, subtract] = addSubtract();

add(1);
add(42);
subtract(39);