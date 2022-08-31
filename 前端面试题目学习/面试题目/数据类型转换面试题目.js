console.log("'123' == 123", "123" == 123); // true
console.log("'' == null", "" == null); // false
console.log("'' == 0", "" == 0); // false
console.log("[] == 0", [] == 0); // true
console.log("[] == ''", [] == ""); // true
console.log("[] == ![]", [] == ![]); // true
console.log("[] == []", [] == []); // false
console.log("null == undefined", null == undefined); // true
console.log("Number(null)", Number(null)); // 0
console.log("Number(undefined)", Number(undefined)); // NaN
console.log("Number('')", Number("")); // 0
console.log("parseInt('')", parseInt("")); // NaN
console.log("{}+10", {} + 10); // [object Object] 10
let obj = {
  [Symbol.toPrimitive]() {
    return 200;
  },
  valueOf() {
    return 300;
  },
  toString() {
    return "Hello";
  },
};
console.log(obj + 200); // 这里打印出来是多少 400
