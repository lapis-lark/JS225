let prot = {};

let foo = Object.create(prot);

console.log(Object.getPrototypeOf(foo));
console.log(prot.isPrototypeOf(foo));
Object.prototype.isPrototypeOf(foo);