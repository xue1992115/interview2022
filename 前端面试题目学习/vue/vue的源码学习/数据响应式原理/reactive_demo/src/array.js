import def from "./util";
const arrayPrototype = Array.prototype;
// 创建一个以arrayPrototype为原型的对象
const arrayMethods = Object.create(arrayPrototype);
// 要被修改的方法
const methodsNeedChange = [
  "push",
  "pop",
  "shift",
  "unshift",
  "sort",
  "reverse",
  "splice",
];

methodsNeedChange.forEach((methodName) => {
  const original = arrayMethods[methodName];
  def(
    arrayMethods,
    methodName,
    function () {
      // 将arguments类数组转成数组
      const args = [...arguments];
      const ob = this.__ob__;
      let inserted = [];
      switch (methodName) {
        case "push":
        case "unshift":
          inserted = args;
          break;
        case "splice":
          inserted = args.slice(2);
          break;
      }
      // 插入的数据也变成响应式的
      if (inserted.length) {
        ob.observeArray(inserted);
      }
      original.apply(this, arguments);
    },
    false
  );
});
export { arrayMethods };
