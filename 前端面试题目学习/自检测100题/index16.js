(() => {
  // y相当于是一个全局的变量
  // y=10
  // 但是x是块级作用域，只能在块级作用域中起作用，因此在立即执行函数中访问，是undefined
  // let x = y
  // 等同于上边的代码
  let x = (y = 10);
})();

console.log(typeof x); // undefined
console.log(typeof y); // number
