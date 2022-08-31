for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

// 方法1 let声明
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
// 方法2 闭包
for (let i = 1; i <= 5; i++) {
  const j = i;
  setTimeout(function () {
    console.log(j);
  }, 0);
}
// 方法3 立即执行函数
for (let i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(i);
    }, 0);
  })(i);
}

// 方法4 setTimeout传入一个参数
for (let i = 1; i <= 5; i++) {
  setTimeout(
    function () {
      console.log(i);
    },
    0,
    i
  );
}
