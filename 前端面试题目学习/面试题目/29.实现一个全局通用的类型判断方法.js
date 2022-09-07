// typeof的原理是
// typeof在计算机底层基于数据类型的二进制进行检查
// typeof null为object原因是因为对象在计算机的存储中，都是以000开始的二进制存储，所以检测出来的结果是对象
// typeof 普通对象/数组对象/正则对象/日期对象 都是object
// typeof NaN = number

// instanceof
// 检测当前实例是否属于这个类的
// 底层机制：只要当前类出现在实例的原型上，结果都是true
// 不能检测基本数据类型

// constructor
// 支持基本类型
// constructor可以随便改，也不准

// Object.prototype.toString.call([val])
// 返回当前实例所属类信息

function getType(data) {
  const type = typeof data;
  if (type === "object") {
    return Object.prototype.toString
      .call(data)
      .replace(/^\[object (\S+)\]$/, "$1");
  } else {
    return type;
  }
}
console.log(getType({}));
