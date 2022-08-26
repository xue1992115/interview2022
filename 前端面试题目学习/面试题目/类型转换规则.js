console.log("123" == 123, "'123' == 123 "); // true
console.log("" == null, "'' == null"); /// false
console.log("" == 0, "'' == 0"); // true
console.log([] == 0, "[] == 0"); // true
console.log([] == "", "[] == '' "); // true
console.log([] == ![], "[] == ![] "); // true
console.log(null == undefined, "null == undefined"); // true
console.log(Number(null), "Number(null)"); // 0
console.log(Number(""), "Number('')"); // 0
console.log(parseInt(""), "parseInt('')"); // NaN
console.log({} + 10, "{} + 10"); // [object Object]10
let obj = {
  [Symbol.toPrimitive]() {
    return 200;
  },
  valueOf() {
    return 300;
  },
  toString() {
    return "Hello";
  },
};
console.log(obj + 200, "obj + 200"); // 400

// 1、boolean值
// 数值类型的除了 +0 -0 NaN 转位false其余为true
// 字符串除了空字符串转为false, 其余的转为true
// null转为false undefiend 转为false
// 引用类型的 都是true

// 2、字符串
// 数值和boolean直接转换成字符串即可
// 数组的[1，2] => 1,2  [1,undefined,3,4,2] => 1,,3,4,2
// 对象 => [object Object]

// 3、转换数字
// true => 1 false => 0
// 字符串纯数字的直接转换，非纯数字的转换成NaN
// 数组 [] => 0 [1]=> 1 [1,2] => NaN
// null => 0
// undefined => NaN
// {} => NaN
// Symbol 报错

// 4、对象转换原始类型
// 首先调用内置的ToPrimitive函数，如果是原始类型直接返回，否则
// 调用valueOf函数，如果是原始类型返回，否则
// 调用toString函数，如果是原始类型返回，否则报错
let a = {
  valueOf() {
    return 0;
  },
  toString() {
    return "1";
  },
  [Symbol.toPrimitive]() {
    return 2;
  },
};
console.log(1 + a, "1 + a"); //3

// 5、四则运算
// 如果有字符串就转换成字符串
// 如果一方不是字符串或者数字，那么会将它转换为数字或者字符串

console.log(1 + "1", "1 + '1' "); // 11
console.log(true + true, "true + true "); // 2
console.log(4 + [1, 2, 3], "4 + [1,2,3]"); // 41,2,3
console.log([1, 2, 3].toString());
console.log("a" + +"b", "'a' + + 'b'"); // "aNaN"

// 6、比较运算符
// 如果是对象，就通过 toPrimitive 转换对象
// 如果是字符串，就通过 unicode 字符索引来比较
console.log("1" + 10n, "'1' + 1n  "); // 11
