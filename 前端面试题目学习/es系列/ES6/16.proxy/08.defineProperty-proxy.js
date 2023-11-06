// 1、defineProperty()方法拦截了Object.defineProperty()操作。
// 注意，如果目标对象不可扩展（non-extensible），
// 则defineProperty()不能增加目标对象上不存在的属性，否则会报错。
// 另外，如果目标对象的某个属性不可写（writable）或不可配置（configurable），
// 则defineProperty()方法不得改变这两个设置。
const handler = {
  defineProperty (target, key,value, descriptor) {
    return true; // 这里的返回值，只是提示操作成功，或者失败，并不阻止操作的动作
  }
};
const target = {};
const proxy = new Proxy(target, handler);
proxy.foo = 'bar' // defineProperty没有任何操作，因此不会生效
console.log(proxy, "proxy");