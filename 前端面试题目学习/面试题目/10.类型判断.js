// 1、typeof
// 可以判断基础的类型，除了null之外
// 2、instanceof
// 可以判断复杂的引用类型，本质是判断原型链上能不能找到prototype
// 缺点： 不能判断基础的类型
// 3、constructor判断
// 可以判断基本类型和引用类型
console.log((2).constructor === Number); // true
console.log(true.constructor === Boolean); // true
console.log("str".constructor === String); // true
console.log([].constructor === Array); // true
console.log(function () {}.constructor === Function); // true
console.log({}.constructor === Object); // true
function Fn() {}
// 缺点：引用类型的如果修改了 原型，那么构造函数就不可靠了
Fn.prototype = new Array();

var f = new Fn();

console.log(f.constructor === Fn); // false
console.log(f.constructor === Array); // true
// 4、Object.prototype.toString.call()
// 可以很好的判断基础类型和引用类型，甚至可以区分document和Window
Object.prototype.toString({}); // "[object Object]"
Object.prototype.toString.call({}); // 同上结果，加上call也ok
Object.prototype.toString.call(1); // "[object Number]"
Object.prototype.toString.call("1"); // "[object String]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(function () {}); // "[object Function]"
Object.prototype.toString.call(null); //"[object Null]"
Object.prototype.toString.call(undefined); //"[object Undefined]"
Object.prototype.toString.call(/123/g); //"[object RegExp]"
Object.prototype.toString.call(new Date()); //"[object Date]"
Object.prototype.toString.call([]); //"[object Array]"
Object.prototype.toString.call(document); //"[object HTMLDocument]"
Object.prototype.toString.call(window); //"[object Window]"
// 通用的类型判断方法
function getType(obj) {
  let type = typeof obj;
  if (type !== "object") {
    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString
    .call(obj)
    .replace(/^\[object (\S+)\]$/, "$1"); // 注意正则中间有个空格
}
