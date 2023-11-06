// 1、has是用来拦截hasProperty操作的，及判断对象是否具有某个属性，这个方法会生效，in操作
// 接收的参数两个：
// target: 目标对象
// propKey: 查询的属性名称
const target = { _prop: 'foo', prop: 'foo' };
const proxy = new Proxy(target, {
    has (target, key) {
        if (key[0] === '_') {
            return false;
        }
        return key in target;
    }
});
console.log('_prop' in proxy);
console.log('prop' in proxy);

// 2、如果原对象不可配置或者禁止扩展，这时has()拦截会报错。
const obj = { a: 10 };
Object.preventExtensions(obj);
const proxy2 = new Proxy(obj, {
  has: function(target, prop) {
    return false;
  }
});
try {
    console.log('a' in proxy2);
} catch (error) {
    console.log(error, "error");
}

// 3、以上值得注意的是has方法不区分属性是自己的还是继承的属性
// 4、另外for...in操作也使用到的in操作符号，但是has对for...in不起作用

