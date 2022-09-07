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
console.log(String([1, undefined, 2, 3, 4])); // 1,,2,3,4
console.log(String([1, null, 2, 3, 4])); // 1,,2,3,4
console.log(String([1, {}, 2, 3, 4])); // 1,[object Object],2,3,4
console.log(String([1, [], 2, 3, 4])); // 1,,2,3,4
console.log(String([1, () => {}, 2, 3, 4])); // 1,() => {},2,3,4

// 1、boolean值
// 数值类型的除了 +0 -0 NaN 转位false其余为true
// 字符串除了空字符串转为false, 其余的转为true
// null转为false undefiend 转为false
// 引用类型的 都是true
// 总结： -0 +0 NaN undefined null '' => false 其余的转换成true

// 2、字符串
// 数值和boolean,function, Symbol直接转换成字符串即可
// 重点数组：
// [1] => 1   [1,2,4] => 1,2,4 [1,undefined,2,3,4] => 1,,2,3,4
// 对象 => [object Object]

// 3、转换数字
// true => 1
// false => 0
// 字符串纯数字的直接转换，非纯数字的转换成NaN,空字符串转成0
// [] => 0; [1] => 1; [1,2] => NaN
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
// 加法运算
// 如果有字符串就转换成字符串
// 如果一方不是字符串或者数字，那么会将它转换为数字或者字符串

console.log(1 + "1", "1 + '1' "); // 11
console.log(true + true, "true + true "); // 2
console.log(4 + [1, 2, 3], "4 + [1,2,3]"); // 41,2,3
console.log([1, 2, 3].toString());
console.log("a" + +"b", "'a' + + 'b'"); // "aNaN"
// 除了加法，其他的运算，只要其中一方是数字，就转成数字进行运算
console.log(4 * "3", "4 * '3'"); // 12
console.log(4 * [], "4 * []"); // 0
console.log(4 * [1, 2], "4 * [1, 2]"); // NaN

// 6、比较运算符
// 如果是对象，就通过 toPrimitive 转换对象
// 如果是字符串，就通过 unicode 字符索引来比较
console.log("1" + 10n, "'1' + 1n  "); // 11

// 7、强制类型转换
// Number String  parseInt parseFloat toString Boolean

// 8、'=='隐式类型转换规则
// 如果类型相同，无须进行类型转换；
// 如果其中一个操作值是 null 或者 undefined，那么另一个操作符必须为 null 或者 undefined，才会返回 true，否则都返回 false；
// 如果其中一个是 Symbol 类型，那么返回 false；
// 两个操作值如果为 string 和 number 类型，那么就会将字符串转换为 number；
// 如果一个操作值是 boolean，那么转换成 number；
// 如果一个操作值为 object 且另一方为 string、number 或者 symbol，就会把 object 转为原始类型再进行判断（调用 object 的 valueOf/toString 方法进行转换）

// 9、+的隐式类型转换
// +号不仅可以作用于数字相加，还可以用字符串相连接；仅当 '+' 号两边都是数字时，进行的是加法运算；如果两边都是字符串，则直接拼接，无须进行隐式类型转换。
// 如果其中有一个是字符串，另外一个是 undefined、null 或布尔型，则调用 toString() 方法进行字符串拼接；如果是纯对象、数组、正则等，则默认调用对象的转换方法会存在优先级，然后再进行拼接。
// 如果其中有一个是数字，另外一个是 undefined、null、布尔型或数字，则会将其转换成数字进行加法运算，对象的情况还是参考上一条规则。
// 如果其中一个是字符串、一个是数字，则按照字符串规则进行拼接
// 字符串的优先级高

// 10、undefined和null
// undefined代表含义表示为定义
// null表示的是空对象