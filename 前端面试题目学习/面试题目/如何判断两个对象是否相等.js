const obj = {
  a: 1,
  b: 2,
};
const obj2 = {
  a: 1,
  b: 2,
};
const obj3 = {
  a: 1,
  b: "2",
};

console.log(JSON.stringify(obj) === JSON.stringify(obj2)); // true
console.log(JSON.stringify(obj2) === JSON.stringify(obj3)); // false
