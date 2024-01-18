function newStack() {
  let stack = [];

  return {
    pop() {
      return stack.pop();
    },
    push(val) {
      stack.push(val);
      return val;
    },
    printStack() {
      stack.forEach(layer => console.log(layer));
    }
  }
}

let test = newStack();
test.printStack();
test.push('hi');
test.push('martian');
test.push('friends');
test.printStack();
test.pop();
test.printStack();
