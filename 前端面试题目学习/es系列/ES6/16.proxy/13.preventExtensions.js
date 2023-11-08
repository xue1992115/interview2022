// 1、preventExtensions方法用来拦截Object.preventExtensions()，该方法必须返回一个布尔值，否则会被自动转为布尔值。
// Object.preventExtensions()是用来防止新的属性添加到对象上，同时防止对象的原形被扩展
const proxy = new Proxy({}, {
  preventExtensions: function (target) {
    return false;
  }
});