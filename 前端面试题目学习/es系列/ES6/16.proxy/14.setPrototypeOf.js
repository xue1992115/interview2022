// 1、setPrototypeOf()方法主要用来拦截Object.setPrototypeOf()方法。
const proxy = new Proxy({}, {
  setPrototypeOf: function() {
    throw new Error("Changing the prototype is forbidden")
  }
})
// 上边只要修改对象的原型就会报错
