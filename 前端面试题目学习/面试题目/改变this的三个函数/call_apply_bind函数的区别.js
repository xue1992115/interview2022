//  1、参数
// call是多个参数
// apply单个数组
// bind多个参数
// 2、方法功能
// call改变this
// apply改变this
// bind改变this
// 3、返回结果
// call直接执行
// apply直接执行
// bind返回一个待执行函数
// 4、这三个方法都是挂在函数上Function上的
// (1)判断数据类型
Object.prototype.toString.call();
// (2)类数组进行调用
var arrayLike = {
  0: "java",
  1: "script",
  length: 2,
};
Array.prototype.push.call(arrayLike, "123");
console.log(arrayLike, "arrayLike");

// (3)获取数组上的最大值和最小值
const arr = [1, 7, 5, 6, 10, 12];
console.log(Math.min.apply(Math, arr));
console.log(Math.max.apply(Math, arr));
