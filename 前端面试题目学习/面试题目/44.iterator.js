// iterator是一种规范就是提供各种数据统一访问的机制
// 例如：使用for of遍历对象
let obj = {
  id: "123",
  name: "张三",
  age: 18,
  gender: "男",
  hobbie: "睡觉",
};

obj[Symbol.iterator] = function () {
  let keyArr = Object.keys(obj);
  let index = 0;
  return {
    next() {
      return index < keyArr.length
        ? {
            value: {
              key: keyArr[index],
              val: obj[keyArr[index++]],
            },
          }
        : {
            done: true,
          };
    },
  };
};

for (let key of obj) {
  console.log(key);
}
