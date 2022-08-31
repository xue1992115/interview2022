[1, 2, 3, 4].reduce((x, y) => console.log(x, y)); // 1 2 and undefined 3 and undefined 4
//reduce参数initialValue可选，如果没有提供就是数组中的第一个元素
// 在第一次调用时，累加器x为1，当前值“y”为2，打印出累加器和当前值：1和2
// 例子中我们的回调函数没有返回任何值，只是打印累加器的值和当前值。如果函数没有返回值，则默认返回undefined。 在下一次调用时，累加器为undefined，当前值为“3”, 因此undefined和3被打印出。
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol("foo") === Symbol("foo"));
 console.log("🥑" + "💻");
 