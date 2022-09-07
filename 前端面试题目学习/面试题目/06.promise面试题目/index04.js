Promise.resolve()
  .then(() => {
    // 任何一个非promise对象的，返回都会使用promise进行包裹
    // 如果要抛出一个错误的话 throw new Error("error!!!")
    return new Error("error!!!");
  })
  .then((res) => {
    console.log("then: ", res);
  })
  .catch((err) => {
    console.log("catch: ", err);
  });
