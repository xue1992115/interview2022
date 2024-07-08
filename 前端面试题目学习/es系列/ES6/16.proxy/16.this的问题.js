/*
 * @Author: hxx
 * @Date: 2023-11-08 09:18:17
 * @LastEditors: hxx
 * @LastEditTime: 2024-07-08 14:24:09
 */
const target = {
  m: function () {
    console.log(this === proxy);
  },
};
const handler = {};

const proxy = new Proxy(target, handler);

target.m(); // false
proxy.m(); // true

// 上边的问题：被代理的目标对象中的this指向的是proxy实例
// 因此即使不做任何的拦截，也不能和目标对象的行为保持一致，原因就是this的指向

// 下面是一个例子，由于this指向发生变化，导致proxy无法代理目标对象
const _name = new WeakMap();
class Person {
  constructor(name) {
    _name.set(this, name);
  }
  get name() {
    return _name.get(this);
  }
}
const person1 = new Person("hxx");
const proxy1 = new Proxy(person1, {});
console.log(person1.name); // hxx
console.log(proxy1.name); // undefined

// 解决上述的问题的方法，需要重新绑定this的指向，将this指向原来的目标对象
