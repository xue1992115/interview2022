Function.prototype.myApply = function (context) {
  // 保存this
  const _this = this;
  // 将this指向传入的context
  context.fn = _this;
  // 保存参数
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  // 删除 fn， 不删除导致属性越来越多
  delete context.fn;
  return result;
};
function foo(age) {
  this.age = age;
  console.log(this.name);
  console.log(this.age);
  console.log(this.foo);
}
const obj = {
  name: "test",
  foo: () => {},
};
console.log(foo.myApply(obj, [29]));
