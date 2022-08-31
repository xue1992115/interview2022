// 手写实现instanceof
// instanceof的原理就是right.prototype在左边的原型链上
function _instanceof(left, right) {
  // 做一些兼容处理了
  if (typeof left !== "object" || left === null) return false;
  const prototype = right.prototype;
  left = left.__proto__;
  while (true) {
    // 通过return语句结束循环
    if (left === null) return false;
    if (left === prototype) return true;
    left = left.__proto__;
  }
}

const obj = {
  name: "test",
};
console.log(_instanceof(obj, Object));
console.log(_instanceof("test", Object));
