import Dep from "./Dep";
var uid = 0;

export default class Watcher {
  /**
   *
   * @param {*} target  要监听的对象
   * @param {*} expression  对象中的属性名 'a.b.c.d'
   * @param {*} callback 回调函数
   */
  constructor(target, expression, callback) {
    console.log("Watcher构造函数");
    this.id = uid++;
    this.target = target;
    // 按点拆分  执行this.getter()就可以读取data.a.b.c的内容
    this.getter = parsePath(expression);
    this.callback = callback;
    // 获取属性值
    this.value = this.get();
  }
  get() {
    // 进入依赖收集阶段。
    // 让全局的Dep.target设置为Watcher本身
    // 将Watcher设置成全局的属性
    Dep.target = this;
    console.log(this);
    // 要监听的对象
    const obj = this.target;
    var value;
    // 只要能找就一直找
    try {
      value = this.getter(obj);
    } finally {
      Dep.target = null;
    }
    return value;
  }
  // 更新方法
  update() {
    this.run();
  }
  run() {
    this.getAndInvoke(this.callback);
  }
  getAndInvoke(callback) {
    const value = this.get();
    if (value !== this.value || typeof value === "object") {
      const oldValue = this.value;
      this.value = value;
      // 调用回调函数
      callback.call(this.target, value, oldValue);
    }
  }
}

/**
 * 将str用.分割成数组segments，然后循环数组，一层一层去读取数据，最后拿到的obj就是str中想要读的数据
 * @param {*} str
 * @returns
 */
function parsePath(str) {
  let segments = str.split(".");
  return function (obj) {
    for (let key of segments) {
      if (!obj) return;
      obj = obj[key];
    }
    return obj;
  };
}
