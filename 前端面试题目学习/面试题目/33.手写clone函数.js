Object.prototype.clone = function () {
  var o = this.constructor === Array ? [] : {};
  for (var e in this) {
    o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
  }
  return o;
};

var arr = [1, 2, 3, [3, 4, 5]];

console.log(arr.clone());
