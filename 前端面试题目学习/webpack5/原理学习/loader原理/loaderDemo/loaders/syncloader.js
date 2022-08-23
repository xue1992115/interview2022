// 同步的loader
module.exports = function (content) {
  console.log(content, "content");
  return content;
};

module.exports = function (content, map, meta) {
  // 第一个参数null 表示错误的信息
  this.callback(null, content, map, meta);
  return content;
};
