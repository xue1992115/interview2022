function myFreeze(obj) {
  // 判断参数是否为Object类型，如果是就封闭对象，循环遍历对象。去掉原型属性，将其writable特性设置为false
  if (obj instanceof Object) {
    Object.seal(obj); // 封闭对象
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        Object.defineProperty(obj, key, {
          writable: false, // 设置只读
        });
        // 如果属性值依然为对象，要通过递归来进行进一步的冻结
        myFreeze(obj[key]);
      }
    }
  }
}

function myFreeze2(obj) {
  if (obj instanceof Object) {
    Object.seal(obj);
    for (var i in obj) {
      Object.defineProperty(obj, i, {
        writable: false,
      });
      myFreeze2(obj[i]);
    }
  }
}
const obj = {
  name: {
    test: "nihao",
  },
};
// myFreeze(obj);
myFreeze2(obj);
console.log(obj);
obj.name.test = "n";
console.log(obj);
