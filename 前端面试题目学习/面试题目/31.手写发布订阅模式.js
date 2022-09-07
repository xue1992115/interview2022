class EventEmitter {
  constructor() {
    // 用于存储监听事件
    this.events = {};
  }
  // 实现订阅模式
  on(type, callback) {
    if (!this.events[type]) {
      this.events[type] = [callback];
    } else {
      this.events[type].push(callback);
    }
  }
  // 触发事件
  emit(type, ...rest) {
    // this指向EventEmitter实例对象
    this.events[type] &&
      this.events[type].forEach((fn) => {
        // 修改fn内部的this指向EventEmitter实例对象
        fn.apply(this, rest);
      });
  }
  // 删除订阅事件
  off(type, callback) {
    if (this.events[type]) {
      this.events[type] = this.events[type].filter((item) => {
        return item !== callback;
      });
      console.log(this.events, "移除监听事件了");
    }
  }
  // once 执行一次
  once(type, callback) {
    function fn() {
      callback();
      this.off(type, fn);
    }
    // 订阅事件，执行之后，执行移除事件
    this.on(type, fn);
  }
}
const event = new EventEmitter();

const handler = function (...rest) {
  console.log(rest, "rest 传递的参数");
  console.log(this, "this");
};
const handler2 = function (...rest) {
  console.log(rest);
};

event.on("click", handler);
event.emit("click");
// event.on("click", handler2);
// event.on("click2", handler);

// event.emit("click", 1, 2, 3, 4);
// event.off("click", handler);
// event.off("click", handler2);
// event.once("dbClick", () => {
//   console.log(123456);
// });
