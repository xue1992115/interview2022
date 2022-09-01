class EventEmitter {
  constructor() {
    // 用来存储监听的事件
    this.events = {};
  }
  // 有注册监听事件
  on(type, cb) {
    if (this.events[type]) {
      this.events[type].push(cb);
    } else {
      this.events[type] = [cb];
    }
  }
  // 有触发事件
  emit(type, ...rest) {
    if (this.events[type]) {
      this.events[type].forEach((fn) => {
        event.apply(this, rest);
      });
    }
  }
  // 移除事件
  // 根据callback去移除对应的事件的回调函数
  off(type, callback) {
    if (this.events[type]) {
      this.events[type].filter((fn) => {
        return fn !== callback;
      });
    }
  }
  // 执行一次
  once(type, callback) {
    function fn() {
      callback();
      this.off(type, fn);
    }
    this.on(type, fn);
  }
}
const event = new EventEmitter();
