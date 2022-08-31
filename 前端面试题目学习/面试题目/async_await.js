// 面试题目一
// var a = 0;
// var b = async () => {
//   a = a + (await 10);
//   console.log("2", a); // -> '2' 10
//   a = (await 10) + a;
//   console.log("3", a); // -> '3' 20
// };
// b();
// a++;
// console.log("1", a); // -> '1' 1

// 面试题目二
// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   let result = await promise; // 等待，直到 promise resolve (*)

//   console.log(result); // "done!"
// }

// f();
// console.log("nihao");

// 面试题目三
// console.log(1);
// async function asyncFunc() {
//   console.log(2);
//   // await xx ==> promise.resolve(()=>{console.log(3)}).then()
//   // console.log(3) 放到promise.resolve或立即执行
//   await console.log(3);
//   // 相当于把console.log(4)放到了then promise.resolve(()=>{console.log(3)}).then(()=>{
//   //   console.log(4)
//   // })
//   // 微任务谁先注册谁先执行
//   console.log(4);
// }

// setTimeout(() => {
//   console.log(5);
// });

// const promise = new Promise((resolve, reject) => {
//   console.log(6);
//   resolve(7);
// });

// promise.then((d) => {
//   console.log(d);
// });

// asyncFunc();

// console.log(8);

// // 结果： 1 6 2 3 8  7  4 5

// 面试题目四
// setTimeout(function () {
//   console.log(1);
// }, 0);
// new Promise(function (resolve, reject) {
//   console.log(2);
//   resolve();
// }).then(function () {
//   console.log(3);
// });
// // process.nextTick指定的异步任务总是发生在所有的异步任务之前
// process.nextTick(function () {
//   console.log(4);
// });
// console.log(5);

// // 结果：2 5 4 3 1

// 面试题目五
// console.log("script start");

// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);

// console.log("script end");

// 结果：script start   script end  setTimeout

// 面试题目六
// console.log("script start");

// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);

// new Promise((resolve) => {
//   console.log("Promise");
//   resolve();
// })
//   .then(function () {
//     console.log("promise1");
//   })
//   .then(function () {
//     console.log("promise2");
//   });

// console.log("script end");

// 结果：script start  / Promise /  script end  /  promise1 /  promise2  /  setTimeout

// 面试题目七
// async function timeout(ms) {
//   await new Promise((resolve) => {
//     console.log("dd");
//     setTimeout(resolve, ms);
//   }).then(() => {
//     console.log("3333");
//   });
//   console.log("22");
// }
// async function asyncConsole(value, ms) {
//   await timeout(ms);
//   console.log(value);
// }
// asyncConsole("hello async and await", 1000);
// console.log("444");

// 面试题目八

// async function timeout(ms) {
//   await 3;
//   console.log("22");
// }
// async function asyncConsole(value, ms) {
//   await timeout(ms);
//   console.log(value);
// }
// asyncConsole("hello async and await", 1000);
// console.log("444");

// 面试题目九
var a = 0;
var b = async () => {
  a = a + (await 10);
  console.log("2", a); // -> '2' 10
  a = (await 10) + a;
  console.log("3", a); // -> '3' 20
};
b();
a++;
console.log("1", a);
