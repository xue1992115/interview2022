// 传递一个参数
function a(x) {
  return x;
}
var res1 = a(1);
console.log(res1, "res");

// 传递两个参数
function a2(x) {
  return function (y) {
    return x + y;
  };
}
var res2 = a2(1)(2);
console.log(res2, "res2");

// 传递三个参数
function a3(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
var res3 = a3(1)(2)(3);
console.log(res3, "res3");

// 传递n个参数，参考53.实现函数柯里化.js
