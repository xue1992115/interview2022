function sayHi() {
  console.log(name); // undefined
  console.log(age); // 报错 reference error
  // var声明的变量在创建的阶段就被变量提升了，并且被赋值为undefined
  var name = "Lydia";
  // 通过 let 和 const 关键字声明的变量也会提升，，但是和 var 不同，它们不会被初始化。在我们声明（初始化）之前是不能访问它们的
  // 这个行为被称之为暂时性死区；当我们试图在声明之前访问它们时，JavaScript 将会抛出一个 ReferenceError 错误。
  let age = 21;
}

sayHi();
