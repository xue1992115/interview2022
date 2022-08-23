// 手写一个清楚log的loader
module.exports = function (content) {
  return content.replace(/console\.log\(.*\);?/g, "");
};
