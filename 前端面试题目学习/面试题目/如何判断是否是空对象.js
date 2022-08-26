const obj = {};
// 方法1 ES6中的 Object.keys
console.log(Object.keys(obj).length);

// 方法2 遍历判断 for in
function isEmpty() {
  for (var i in obj) {
    return false;
  }
  return true;
}
const res = isEmpty(obj);
console.log(res, "res");

// 方法3转换成字符转
console.log(JSON.stringify(obj) === "{}");
