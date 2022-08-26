const obj = {};
// 方法1 构造函数
console.log(obj.constructor === Object);

// 方法2 instanceof
console.log(obj instanceof Object);

// 方法3 调用原型上的toString方法
console.log(obj.toString() === "[object Object]");
