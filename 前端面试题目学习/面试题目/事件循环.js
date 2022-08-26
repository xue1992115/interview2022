// 1、单线程
// 2、事件队列
// 3、微任务/宏任务
// 4、事件循环 Event Loop
// * 执行同步代码是属于宏任务
// * 执行栈为空，查询是否有微任务需要执行
// * 执行所有的微任务
// * 必要的话，渲染UI
// * 然后开始下一轮的event loop循环，执行宏任务中的异步代码
setTimeout(function () {
  console.log("1");
}, 0);
async function async1() {
  console.log("2");
  const data = await async2();
  // async2执行完了，才能执行下面的语句
  console.log("3");
  return data;
}
async function async2() {
  return new Promise((resolve) => {
    console.log("4");
    resolve("async2的结果");
    // 微1
  }).then((data) => {
    console.log("5");
    return data;
  });
}
// 微任务3
async1().then((data) => {
  console.log("6");
  console.log(data);
});
new Promise(function (resolve) {
  console.log("7");
  // 如果没有resolve，下边的8就不输出了
  // resolve();
  // 微任务2
}).then(function () {
  console.log("8");
});

// 2 4 7 5 8 3 6 async2的结果 1
// 宏任务 [1, ]
// 微任务 [5, 'async2的结果', '6', 8]
