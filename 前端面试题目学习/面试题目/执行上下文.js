// 当执行上下文的时候会产生三种执行上下文
// 全局执行上下文
// 函数执行上下文
// eval执行上下文

// 每个执行上下文都包含以下对象：
// （1）变量对象VO 用于存储变量，函数，形参
// （2）作用域链 变量的作用域是在定义时就决定了
// （3）this

// 例子
// var a = 10;
// function foo(i) {
//   var b = 20;
// }
// foo();

// 上述代码执行上下文有两个：
// stack: [ globalContext, fooContext]

// globalContext.VO === globe
// globalContext.VO = {
//     a: undefined,
// 	foo: <Function>,
// };

// fooContext.VO === foo.AO
// fooContext.AO {
//     i: undefined,
// 	b: undefined,
//     arguments: <>
// }

// 作用域可以把它理解成包含自身变量对象和上级变量对象的列表
// fooContext.[[Scope]] = [
//     globalContext.VO
// ]
// fooContext.Scope = fooContext.[[Scope]] + fooContext.VO
// fooContext.Scope = [
//     fooContext.VO,
//     globalContext.VO
// ]

// 因为当 JS 解释器在遇到非匿名的立即执行函数时，会创建一个辅助的特定对象，然后将函数名称作为这个对象的属性，因此函数内部才可以访问到 foo，但是这个值又是只读的，所以对它的赋值并不生效，所以打印的结果还是这个函数，并且外部的值也没有发生更改。
var foo = 1;
var foo = (function foo() {
  // 名字和foo函数相等，之后函数内部可以访问，并且是只读的，不能做修改
  foo = 10; // 修改无效
  var test = 1;
  console.log(foo); // [Function: foo]
  console.log(test); // 1
})();

console.log(foo); // undefined
