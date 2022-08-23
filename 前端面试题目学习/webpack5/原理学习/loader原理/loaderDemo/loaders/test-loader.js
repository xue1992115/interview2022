// 1、loader本身是一个函数, content接受的是文件的内容
// 当webpack解析资源的时候，会调用相应的loader
// loader接受文件content，作为参数，所以我们可以修改文件，并且最后返回文件的内容
// map： sourceMap
// meta： 其他loader传递的参数
// 2、 同步loader / 异步loader/ rawloader / pitching Loader
// 3、loader api
// this.async方法 异步回调loader,返回一个this.callback
// this.callback方法 可以同步或者异步调用的，可以返回多个结果的函数
// this.getOptions(schema) 获取loader的options
// this.emitFile方法 产生一个文件
// this.util.contextify() 返回一个相对路径
// this.util.absolutify() 返回一个绝对路径
module.exports = function (content, map, meta) {
  console.log(content, "content");
  return content;
};
