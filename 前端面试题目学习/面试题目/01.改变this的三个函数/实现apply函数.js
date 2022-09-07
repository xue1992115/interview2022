Function.prototype.myApply = function (context) {
  // 保存this，这个this指向是，谁调用函数就只想谁
  // 这里指向的是foo，把foo保存下来
  const _this = this;
  // 将foo做为对象的一个属性
  context.fn = _this;
  // 保存参数
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  // 删除 fn， 不删除导致属性越来越多
  delete context.fn;
  return result;
};
function foo(a, b) {
  console.log(this.name); // 输出test
  console.log(a, b);
}
const obj = {
  name: "test",
};
console.log(foo.myApply(obj, [1, 2]));
