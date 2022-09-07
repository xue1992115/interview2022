const arr = [1, 2, 3];

// 方法1 Array.isArray
console.log(Array.isArray(arr));
// 方法2 instanceof 判断是否是Array的实例
console.log(arr instanceof Array);
// 方法3 构造函数去判断
console.log(arr.constructor === Array);
// 方法4 调用对象原型的toString方法
const type = Object.prototype.toString.call(arr);
console.log(type === "[object Array]");

// 方法5 基于Object.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(arr);
// 方法6 基于getPrototypeOf
Object.getPrototypeOf(arr) === Array.prototype;
