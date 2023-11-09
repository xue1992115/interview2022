// 1、WeakSet的结构与Set的结构类似
// 本身是一个构造函数
// 区别：只能存放对象或者Symbol值
// WeakSet之所以是弱类型的主要是WeakSet中的对象都是弱引用，也就是说如果没有其他的变量在引用了
// 垃圾回收机制就会回收这个对象，不管这个对象是否在WeakSet中的是否存在
// 因此WeakSet中没有size属性，不能遍历自身属性
const ws = new WeakSet();
try {
    ws.add(1) 
} catch (error) {
    console.log(error);
}// 报错
try {
    let s = Symbol();
    ws.add(s)
} catch (error) {
    console.log(error);
} //理论上不报错的，但是现在是在node环境跑代码就会报错，浏览器上不报错
// 2、接收的参数
// 数组，对象，Symbol
const arr = [1,2,4];
ws.add(arr);
console.log(ws.has(arr), 'ws');
console.log(ws.size, 'size');
// 3、属性
// 无size属性
console.log(ws.size); // undefined
// 没有方法遍历成员
console.log(ws.forEach); // undefined


