/**
 * 作用：将一个正常的对象都转成每一层级可侦测的
 *
 */
import def from "./util";
import defineReative from "./defineReative";
import observe from "./observe";
import { arrayMethods } from "./array";
import Dep from "./Dep";
export default class Observer {
  constructor(value) {
    this.dep = new Dep();
    // 构造函数中的this，指向的是new的实例就是Observer实例
    // 这么写的结果就是value身上会有一个__ob__的属性，且不可枚举
    // __ob__的value是一个Observer实例
    def(value, "__ob__", this, false);
    if (Array.isArray(value)) {
      // 如果是数组的话，要强行将数组上的原型执行，我们重新写的对象上
      Object.setPrototypeOf(value, arrayMethods);
      // observe数组
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  // 这个是核心，目的是遍历每一层对象，变成可响应式的
  walk(value) {
    for (let key in value) {
      defineReative(value, key);
    }
  }
  // 数组的遍历方式，侦测数组中的每一项
  observeArray(arr) {
    for (let i = 0, l = arr.length; i < l; i++) {
      // 逐项进行observe
      observe(arr[i]);
    }
  }
}
