// 这边会传递默认的参数给parseInt,默认参数为element, index, array
// 第二个和第三个对应的radix不合法，所以要会解析失败的
// const arr = ["1", "2", "3"].map(parseInt);
const arr = ["1", "2", "3"].map((item, index, ele) => parseInt(item, index));
console.log(arr, "arr");

console.log(parseInt(2, 2)); // 返回NaN的原因是因为2进制表示的只能是0和1
console.log(parseInt(1, 2)); // 1 不会NaN
