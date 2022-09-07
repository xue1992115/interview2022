function fn(left, right) {
  if (typeof left !== "object" || left === null) return false;
  var prototype = right.prototype;
  left = left.__proto__;
  while (true) {
    if (left === null) return false;
    if (left === prototype) return true;
    left = left.__proto__;
  }
}
