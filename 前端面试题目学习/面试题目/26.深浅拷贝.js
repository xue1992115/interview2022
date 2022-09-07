// 浅拷贝的方式
// 1、Object.assign()
const obj = {
  name: "test",
  age: 10,
  info: {
    name: "haha",
    age: {
      name: "nihao",
      age: 20,
    },
  },
};

const obj2 = Object.assign({}, obj);
// 改变obj2.info.age属性，obj.info.age的属性也被改变了
// 所以Object.assign是浅拷贝，相同的属性名则会覆盖
// obj2.info.age = 30;
// console.log(obj2);
// console.log(obj);
// obj2.info.age = 30;

// 方法2 扩展运算符号
const obj3 = { ...obj };
// obj3.info.age = 30;
// console.log(obj3);
// console.log(obj);

// 深拷贝的方式
// 方法JSON.parse(JSON.stringify(object))
// 方法的局限性是会忽略 undefined
// 不能序列化函数
// 不能解决循环引用的对象

const obj4 = JSON.parse(JSON.stringify(obj));
obj4.info.age = 30;
console.log(obj4, "obj4");
console.log(obj, "obj");
