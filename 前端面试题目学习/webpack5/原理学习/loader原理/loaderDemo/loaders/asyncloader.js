// 异步的loader
module.exports = function (content, map, meta) {
  // 第一个参数null 表示错误的信息
  const callback = this.async();
  setTimeout(() => {
    callback(null, content, map, meta);
  }, 1000);
  return content;
};
