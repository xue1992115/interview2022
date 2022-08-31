// 多次绑定，this指向问题
let a = {};
let fn = function () {
  console.log(this);
};
fn.bind().bind(a)();

// 以上代码等同于
// fn.bind().bind(a) 等于
let fn2 = function fn1() {
  return function () {
    return fn.apply();
  }.apply(a);
};
fn2();
// 所以有代码可知无论bind连续多少次，都是由第一次决定的； 因此指向的全局的变量Window
