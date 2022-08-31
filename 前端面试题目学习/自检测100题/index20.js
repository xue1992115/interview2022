const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90,
};
// JSON.stringify的第二个参数是 替代者(replacer). 替代者(replacer)可以是个函数或数组，用以控制哪些值如何被转换为字符串。
const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
