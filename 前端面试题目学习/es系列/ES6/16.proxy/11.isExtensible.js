// 1、isExtensible()方法拦截Object.isExtensible()操作。
var p = new Proxy({}, {
  isExtensible: function(target) {
    console.log("called");
    return true;
  }
});
console.log(Object.isExtensible(p));
// 注意：该方法只能返回boolean值，否则返回的值将会装成布尔值