Promise.reject("err!!!")
  .then(
    (res) => {
      console.log("success", res);
    },
    // 会进入then函数的第二个函数
    (err) => {
      console.log("error", err);
    }
  )
  .catch((err) => {
    console.log("catch", err);
  });

Promise.reject("err!!!")
  .then((res) => {
    console.log("success", res);
  })
  // 会进入catch函数
  .catch((err) => {
    console.log("catch", err);
  });

romise
  .resolve()
  .then(
    function success(res) {
      throw new Error("error!!!");
    },
    function fail1(err) {
      console.log("fail1", err);
    }
  )
  // 抛出一个错误的，会进入catch这个函数
  .catch(function fail2(err) {
    console.log("fail2", err);
  });
