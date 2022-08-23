// rawloader 同步异步都可以
// 但是接受的文件内容是buffer数据
module.exports = function (content, map, meta) {
  // 第一个参数null 表示错误的信息
  const callback = this.async();
  setTimeout(() => {
    callback(null, content, map, meta);
  }, 1000);
  return content;
};
