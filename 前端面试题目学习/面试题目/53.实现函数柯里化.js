// 通过递归+闭包收集参数，实现柯里化
// curry接收一个函数参数
function curry(fn, arr = []) {
  console.log(fn);
  var paramsLen = fn.length;
  return function (...args) {
    var newArgs = [...arr, ...args];
    console.log(newArgs, "han");
    if (newArgs.length === paramsLen) {
      return fn(...newArgs);
    } else {
      return curry(fn, newArgs);
    }
  };
}

function fun(a, b, c) {
  return a * b * c;
}
var curryfn = curry(fun);
// const res = curryfn(1, 2, 3);
// console.log(res, "res");
const res2 = curryfn(1, 2)(3);
console.log(res2, "res2");
