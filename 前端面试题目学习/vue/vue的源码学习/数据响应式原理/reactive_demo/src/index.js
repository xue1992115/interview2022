import observe from "./observe";
import Watcher from "./Watcher";
var obj = {
  a: {
    m: {
      n: "d",
    },
  },
  b: {
    name: "hxx",
  },
  g: [1, 2, 3, 4],
};

observe(obj);
// 修改
// 访问
console.log(obj.a, "obj.a");
console.log(obj, "obj");
console.log(obj.a.m, "obj.a.m"); // 访问不了
obj.g.push(10);
console.log(obj.g, "obj.g");
obj.g[2] = 100; // 通过下标的方式，监听不到数组中的元素是否被修改

obj.c = "test"; // 新添加/删除的对象属性，不是响应式的

obj.b.name = "hxiaoxue"; // 调用之后 测试notify
console.log(obj);
new Watcher(obj, "a.m.n", (val) => {
  console.log("watcher监听", val);
});
obj.a.m.n = 99;
