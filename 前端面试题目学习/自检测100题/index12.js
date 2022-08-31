const a = {};
const b = { key: "b" };
const c = { key: "c" };
// b => [object Object]
// c => [object Object]
a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456
