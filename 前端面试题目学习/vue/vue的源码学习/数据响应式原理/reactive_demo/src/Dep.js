var uid = 0;
export default class Dep {
  constructor() {
    // 就是一个实例的id
    this.id = uid++;
    console.log("Dep构造函数");
    // 用数组存储自己的订阅者
    // 这个数组中存放的就是watcher的实例
    this.subs = [];
  }
  // 添加依赖
  depend() {
    if (Dep.target) {
      console.log("添加依赖啦啦啦啦啦");
      this.addSub(Dep.target);
    }
  }
  addSub(sub) {
    this.subs.push(sub);
    console.log(this, "addSub");
  }
  // 通知依赖
  notify() {
    console.log("我是notify");
    // 浅克隆一份
    const subs = this.subs.slice();
    for (var i = 0, len = subs.length; i < len; i++) {
      subs[i].update();
    }
  }
}
