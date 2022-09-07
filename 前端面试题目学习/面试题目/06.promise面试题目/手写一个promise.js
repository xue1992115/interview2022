function MyPromise(constructor) {
  // 初始化状态
  this.promiseState = "pending";
  // 保存成功的数据
  this.promiseResult = undefined;
  const _self = this;
  this.callback = [];
  function resolve(data) {
    if (_self.promiseState !== "pending") return;
    _self.promiseState = "resolved";
    _self.promiseResult = data;
    _self.callback.forEach((item) => {
      if (item.onResolved) {
        item.onResolved();
      }
    });
  }
  function reject(reason) {
    if (_self.promiseState !== "pending") return;
    _self.promiseState = "rejected";
    _self.promiseResult = reason;
    _self.callback.forEach((item) => {
      if (item.onRejected) {
        item.onRejected();
      }
    });
  }
  try {
    constructor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  const self = this;
  return new MyPromise((resolve, reject) => {
    // 判断状态resolved就执行onResolved
    if (self.promiseState === "resolved") {
      var result = onResolved(self.promiseResult);
      resolve(result);
    }
    // 判断状态rejected就执行onRejected
    if (self.promiseState === "rejected") {
      var result = onRejected(self.promiseResult);
      reject(result);
    }
    if (self.promiseState === "pending") {
      self.callback.push({
        onResolved: () => {
          onResolved(self.promiseResult);
        },
        onRejected: () => {
          onRejected(self.promiseResult);
        },
      });
    }
  });
};
MyPromise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};
// 本质上是不管是成功还是失败，都会执行的
MyPromise.prototype.finally = function (onFinally) {
  return this.then(
    () => {
      onFinally();
    },
    () => {
      onFinally();
    }
  );
};
MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => {
    resolve(value);
  });
};
MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  });
};
// 接收promise为对象
MyPromise.all = function (arr) {
  return new Promise((resolve, reject) => {
    var res = [];
    arr.forEach((item) => {
      item.then(
        (data) => {
          res.push(data);
          if (res.length === arr.length) {
            resolve(res);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};
MyPromise.race = function (arr) {
  return new Promise((resolve, reject) => {
    arr.forEach((item) => {
      item.then(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};
MyPromise.any = function (arr) {
  return new Promise((resolve, reject) => {
    arr.forEach((item) => {
      item.then((data) => {
        resolve(data);
      });
    });
  });
};
// const p = MyPromise.resolve(111);
// console.log(p);
// p.then((data) => {
//   console.log(data, "data");
// });
// p.catch((error) => {
//   console.log(error, "error");
// });
var obj = new MyPromise((resolve, reject) => {
  resolve(1);
  //   reject(2);
  // throw new Error("error");
  // setTimeout(() => {
  //   reject("han");
  // }, 100);
})
  .then(
    (data) => {
      console.log(data, "resolve");
    },
    (error) => {
      console.log(error, "reject");
    }
  )
  .catch((error) => {
    console.log(error, "errorjj");
  })
  .finally(() => {
    console.log("finally");
  });

MyPromise.race([obj, MyPromise.resolve(2)]);
