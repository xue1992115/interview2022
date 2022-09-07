// 1、函数形参传入的是对象的引用地址
let a = {
  name: "Julia",
  age: 20,
};
function change(o) {
  o.age = 24;
  o = {
    name: "Kath",
    age: 30,
  };
  return o;
}
let b = change(a); // 注意这里没有new，后面new相关会有专门文章讲解
console.log(b.age); // 第一个console
console.log(a.age); // 第二个consol