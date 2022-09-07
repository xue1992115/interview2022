// Object.prototype.toString方法是对象原型上的方法
// 可以通过调用该方法返回[object xxx]格式其中xxx就是对象的类型

console.log(Object.prototype.toString({})); // [object Object]
console.log({}.toString()); //[object Object]
console.log(Object.prototype.toString.call(1)); // [object Number]
console.log(Object.prototype.toString.call("1")); // [object String]
console.log(Object.prototype.toString.call(true)); // [object Boolean]
console.log(Object.prototype.toString.call(function () {})); // [object Function]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(undefined)); // [object undefined]
console.log(Object.prototype.toString.call(/123/g)); // [object RegExp]
console.log(Object.prototype.toString.call(new Date())); // [object Date]
console.log(Object.prototype.toString.call([])); // [object Array]
