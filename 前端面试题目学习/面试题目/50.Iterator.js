// for ... in 可用于对象和数组
// for ... of 只能用于数组
// 通过iterator可以遍历对象的值
var obj = {
  name: "test",
};
obj[Symbol.iterator] = function () {
  var keyArr = Object.keys(obj);
  var index = 0;
  return {
    next() {
      return index < keyArr.length
        ? {
            key: keyArr[index],
            value: obj[keyArr[index++]],
            done: false,
          }
        : {
            value: undefined,
            done: true,
          };
    },
  };
};
// for (var o in obj) {
//   console.log(o);
// }
// for (var o in [1, 2, 3]) {
//   console.log(o);
// }
// for (var o of [1, 2, 3]) {
//   console.log(o);
// }
// console.log(Object.entries(obj), "test");
// for (var o of Object.entries(obj)) {
//   console.log(o, "han");
// }
