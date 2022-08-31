// 基本类型没有构造函数
// 可以通过添加()访问基本类型的构造函数
console.log((2).constructor === Number);
console.log(true.constructor === Boolean); // true
console.log("str".constructor === String); // true
console.log([].constructor === Array); // true
console.log(function () {}.constructor === Function); // true
console.log({}.constructor === Object);

// 这里有一个坑，如果创建了对象，修改了其原型
function Fn() {}
Fn.prototype = new Array();
const f = new Fn();
console.log(f.constructor === Fn); // false
console.log(f.constructor === Array); // false
