/**
 * 给对象设置响应式的属性
 * @param {*} data 传入的对象
 * @param {*} key 增加的属性
 * @param {*} val 属性值
 *
 */

import observe from "./observe";
import Dep from "./Dep";
export default function defineReative(data, key, val) {
  const dep = new Dep();
  // 如果没有传入属性值，就获取之前的属性值
  if (arguments.length === 2) {
    val = data[key];
  }
  // 此时形成了递归关系，这递归不是函数自己调用自己，是多个函数循环调用
  let childOb = observe(val);
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    // getter中收集依赖
    get() {
      console.log("试图访问:", key);
      // 在属性被访问的时候就会看看有没有watcher
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
      }
      return val;
    },
    // setter中通知依赖
    set(newValue) {
      val = newValue;
      childOb = observe(newValue);
      // 通知依赖
      dep.notify();
    },
  });
}
