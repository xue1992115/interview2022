function obj() {}
// 方法1 构造函数
console.log(obj.constructor === Function);

// 方法2 instanceof
console.log(obj instanceof Function);

// 方法3 typeof
console.log(typeof obj === "function");
