obj = {
  counter: function () {
    let count = 0;

    return (function () { return count += 1});
  }()
}

console.log(obj.counter()); // 1
console.log(obj.counter()); // 2
console.log(obj.counter()); // 3