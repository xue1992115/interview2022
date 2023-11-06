// 1、apply方法拦截函数的调用，call和apply的操作
// apply可以接受三个参数：
// target: 目标对象
// ctx: 目标对象的上下文对象this
// args: 目标对象的参数
const fun = function() { return "I am a target!"}
const proxy = new Proxy(fun, {
    apply: function(target, ctx, args) {
        console.log(target, "target")
        console.log(ctx, "ctx")
        console.log(args, "args")
        return 'I am the proxy';
    }
})
const res = proxy()
console.log(res, "res");
// 2、每当执行proxy函数（直接调用或call和apply调用），就会被apply方法拦截。
var twice = {
    apply (target, ctx, args) {
      return Reflect.apply(...arguments)  * 2;
    }
  };
function sum (left, right) {
    return left + right;
};
const proxy2 = new Proxy(sum, twice);
console.log(proxy2(1, 2), 'proxy2(1, 2)');
console.log(proxy2.call(null, 5, 6), 'proxy2.call(null, 5, 6)');
console.log(proxy2.apply(null, [7, 8]), 'proxy2.apply(null, [7, 8])');