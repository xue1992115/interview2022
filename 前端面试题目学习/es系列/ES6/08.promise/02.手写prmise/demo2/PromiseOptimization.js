// 1、定义一个构造函数
function Promise(executor) {
  this.PromiseState = "pending";
  this.PromiseResult = undefined;
  // this.callback = {};
  // 改成用数组的原因是为了保证then函数多次调用
  this.callback = [];
  // 解决resolve/reject调用时，this指向的是window；或者使用箭头函数定义resolve/reject
  const self = this;
  // 执行器函数调用
  // 传入参数，此时还会报错
  // 因此需要先声明resolve/reject函数
  const resolve = (data) => {
    // 判断状态保证，状态只被修改一次
    if (this.PromiseState !== "pending") return;
    // 1、修改状态[PromiseState]
    this.PromiseState = "fulfilled";
    // 2、设置结果值[PromiseResult]
    this.PromiseResult = data;
    // 3、异步状态下
    // if(this.callback.onResolved) {
    //     this.callback.onResolved(data)
    // }
    console.log("要执行吗");
    this.callback.forEach((item) => {
      if (item.onResolved) {
        item.onResolved(data);
      }
    });
  };
  const reject = (error) => {
    if (this.PromiseState !== "pending") return;
    // 1、修改状态[PromiseState]
    this.PromiseState = "rejected";
    // 2、设置结果值[PromiseResult]
    this.PromiseResult = error;
    // 3、异步状态下
    // if(this.callback.onRejected) {
    //     this.callback.onRejected(error)
    // }
    this.callback.forEach((item) => {
      if (item.onRejected) {
        item.onRejected(error);
      }
    });
  };
  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
// 2、定义then方法
Promise.prototype.then = function (onResolved, onRejected) {
  console.log("then函数执行啦");
  const self = this;
  if (typeof onRejected !== "function") {
    onRejected = (reason) => {
      throw reason;
    };
  }
  if (typeof onResolved !== "function") {
    onResolved = (value) => value;
  }
  return new Promise((resolve, reject) => {
    // 封装结果出来的函数
    const callback = (type) => {
      try {
        let result = type(this.PromiseResult);
        // 判断
        if (result instanceof Promise) {
          result.then(
            (v) => {
              resolve(v);
            },
            (e) => {
              reject(e);
            }
          );
        } else {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    };
    if (this.PromiseState === "fulfilled") {
      callback(onResolved);
    }
    if (this.PromiseState === "rejected") {
      callback(onRejected);
    }
    if (this.PromiseState === "pending") {
      // 保存回调函数
      // this.callback ={
      //     onResolved,
      //     onRejected
      // }
      this.callback.push({
        onResolved: () => {
          callback(onResolved);
        },
        onRejected: () => {
          callback(onRejected);
        },
      });
    }
  });
};
// 3、定义catch方法
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

// 4、Promise.resolve()
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (typeof value === "promise") {
      value.then(
        (v) => {
          resolve(v);
        },
        (e) => {
          reject(e);
        }
      );
    } else {
      resolve(value);
    }
  });
};
// 5、Promise.reject()
Promise.reject = function (value) {
  return new Promise((resolve, reject) => {
    reject(value);
  });
};

// 6、Promise.all()
Promise.all = function (arr) {
  return new Promise((resolve, reject) => {
    const arrRes = [];
    arr.forEach((item, index) => {
      item.then(
        (value) => {
          arrRes[index] = value;
          if (index === arr.length - 1) {
            resolve(arrRes);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};

// 7、Promise.race()
Promise.race = function (arr) {
  return new Promise((resolve, reject) => {
    arr.forEach((item) => {
      item.then(
        (value) => {
          resolve(value);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};
