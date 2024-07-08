/*
 * @Author: hxx
 * @Date: 2024-07-08 14:26:39
 * @LastEditors: hxx
 * @LastEditTime: 2024-07-08 15:39:36
 */
// 文章来源： https://juejin.cn/post/7080916820353351688
// 1、 proxy的基本的使用方法
// （1）proxy直接代理一个对象
// （2）proxy在遇到代理对象的属性也是一个对象时，同样能够拦截
// （3）被代理的对象新增属性也能都被代理的
// （4）对于数组的push也能都监听
// 解决了object.defineProperty()方法中存在的问题
// 2、如下的例子中的基本使用
// 定义一个需要代理的对象
let person = {
  name: "Barry",
  age: 22,
};
let p = new Proxy(person, {
  get(target, key) {
    return target[key];
  },
  set(target, key, val) {
    return (target[key] = val);
  },
});
// 测试get是否可以拦截成功
console.log("p.name---", p.name);
// 测试set是否可以设置成功
p.age = 18;
console.log("p.age---", p.age);

// 3、proxy中的第三个参数receiver
let person2 = {
  name: "Barry",
  age: 22,
  job: {
    city: "ShenZhen",
    salary: 30,
  },
};
const person3 = {
  name: "hxx",
};
// 在这个例子中receiver是p2, target是被代理的对象
let handler = {
  get(target, key, receiver) {
    console.log("this", this); // 代表的是handler的对象
    console.log("target === person2", target === person2);
    console.log("p2 === receiver", p2 === receiver);
    console.log("person3 === receiver", person3 === receiver);
    // 使用Reflet.get方法，并且传递第三个参数能都修改this的指向，等同于target[key].call(receiver)
    return Reflect.get(target, key, receiver);
  },
  set(target, key, val) {
    Reflect.set(target, key, val);
  },
  deleteProperty(target, key) {
    return Reflect.deleteProperty(target, key);
  },
};
let p2 = new Proxy(person2, handler);
console.log("p2.name---", p2.name); // 输出 Barry
console.log("p2.salary---", p2.job.salary); // 输出 30

// 4、修改上边的例子
// 设置person3继承于person2的代理对象p2
Object.setPrototypeOf(person3, p2);
console.log("p3.job---", person3.job); // 此时get中的receiver === person3
// 因此总结来说就是receiver就是在get陷阱中正确的传递上下文，所以receiver不仅仅是代表代理对象本身，同时也代表继承代理对象的对象

// 5、注意不要把receive和get陷阱中this弄混，陷阱中的this代表的是handler对象

// 6、解释为什么proxy要和reflect配置使用，看下边的例子
const parent = {
  name: "19Qingfeng",
  get value() {
    console.log(this, "this");
    return this.name;
  },
};

const handler2 = {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver);
    // return Reflect.get(target, key);
    // 这里相当于 return target[key]
  },
};

const proxy = new Proxy(parent, handler2);

const obj = {
  name: "wang.haoyu",
};

// 设置obj继承与parent的代理对象proxy
Object.setPrototypeOf(obj, proxy);
console.log("obj.value", obj.value); // 19Qingfeng

// get陷阱中的this发生改变，指向了parent，所以返回19Qingfeng
// 这不是我们期望的结果，我们希望返回的是obj对应自身的name属性wang.haoyu
// 解决办法就是Reflect.get(target, key, receiver);
// 你可以简单的将 Reflect.get(target, key, receiver) 理解成为 target[key].call(receiver)，不过这是一段伪代码，但是这样你可能更好理解。
