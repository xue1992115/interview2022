// 手写实现instanceof

function _instanceof(left, right) {
  // 做一些兼容处理了
  if (typeof left !== "object" || left === null) return false;
  const prototype = right.prototype;
  left = left.__proto__;
  while (true) {
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
