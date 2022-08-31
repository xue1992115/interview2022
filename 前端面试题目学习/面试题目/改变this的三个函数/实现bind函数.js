// (1) 多个入参数
// （2）返回一个待执行的函数
Function.prototype.myBind = function (context) {
  // this是谁在调用就指向睡，因此判断是否是一个函数在调用
  if (typeof this !== "function") {
    throw new Error("Error");
  }
  // 获取上下文
  var _this = this;
  // 获取参数
  var args = [...arguments].slice(1);
  return function () {
    return _this.apply(context, args);
  };
};

let name = "test2";
function foo(name, age) {
  this.name = name;
  this.age = age;
  console.log(this.name);
}
const obj = {
  name: "test",
  foo: foo,
};
console.log(foo.myBind(obj, "han", 19)());
