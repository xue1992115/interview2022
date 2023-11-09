// 1、基本的概念
// 一种的新的数据结构，本身是构造函数
// 类数组，但是成员是唯一的，无重复
const set = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => set.add(x));
console.log(set, "set"); // 2 3 5 4, 没有重复的值
for (let i of set) {
    console.log(i);
}
// 2、接收的参数
// 1、数组
const set2 = new Set([1, 2, 3, 4, 4]);
console.log(set2, 'set2');
// 2、具有 iterable 接口的其他数据结构
// const set3 = new Set(document.querySelectorAll('div')); // HTMLCollection也是一种类数组

// 3、属性
// Set.prototype.constructor: 构造函数，默认就是set函数
// Set.prototype.size: 返回成员总数
// 4、方法
// Set.prototype.add(value)：添加成员，返回set本身
console.log(set2.add(10), 'add 方法');
// Set.prototype.delete(value)：删除成员，返回一个boolean，表示删除是否成功
console.log(set2.delete(10), 'delete 方法'); // true
console.log(set2.delete(11), 'delete 方法'); // false
// Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
console.log(set2.has(11), 'has 方法'); // false
// Set.prototype.clear()：无返回值，表示清空所有的成员

// 5、遍历操作
// Set.prototype.keys()：遍历键名
// Set.prototype.values()：遍历键值
// Set.prototype.entries()：遍历健值对
// Set.prototype.forEach()： 使用回调函数遍历每个成员
// 注意不能使用map
set2.forEach((item) => {
    console.log(item)
})
// 扩展运算符(...) 本质是使用的for...of
let set3 = new Set(['red', 'green', 'blue']);
console.log([...set3]);
// 两者结合起来，达到元素去重的目的
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
console.log(unique, "unique");


