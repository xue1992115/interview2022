let greeting;
greetign = {}; // Typo!
// 代码打印出了一个对象，这是因为我们在全局对象上创建了一个空对象！当我们将 greeting 写错成 greetign 时，JS 解释器实际在上浏览器中将它视为 global.greetign = {} （或者 window.greetign = {}）。
console.log(greetign);
