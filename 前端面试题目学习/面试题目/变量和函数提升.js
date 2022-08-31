// 变量提升的原因：
// 主要是因为在生成执行环境的时候，分为两个阶段：
// 第一个阶段：创建阶段
// JS解释器会找到需要提升的变量和函数，并且提前在内存中为他们开辟空间；函数的话会将整个函数存入内存中，变量只声明并且赋值为 undefined
// 第二个阶段：代码执行阶段
// 所以在第二阶段可以直接提前使用

// b(); // call b
// console.log(a); // undefined

// var a = "Hello world";

// function b() {
//   console.log("call b");
// }

// 在提升过程中，同名的会覆盖，并且函数提升优于变量提升
b(); // call b second

function b() {
  console.log("call b fist");
}
function b() {
  console.log("call b second"); // call b second
}
var b = "Hello world";
