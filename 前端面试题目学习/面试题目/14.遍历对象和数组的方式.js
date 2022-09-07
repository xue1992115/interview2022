const arr = [11, 22, 33, 44, 55];
const obj = {
  name: "test",
  age: 10,
};

// 循环数组
// for
for (let i = 0; i < arr.length; i++) {
  console.log(i);
}
// for...in...遍历键名
for (let i in arr) {
  console.log(i);
}
// for...of...遍历键值
for (let i of arr) {
  console.log(i);
}
// map
// forEach

// 循环对象
// 遍历键名
for (let i in obj) {
  console.log(i);
}
// Object.keys()
// Object.Objects()