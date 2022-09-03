import vnode from "./vnode";
//编写一个低配版本的h函数，源码h函数可以接收不同个数的参数
// 这里必须接受三个参数
// h('div', {}, '文字')
// h('div', {}, [])
// h('div', {}, h())
export default function (sel, data, c) {
  // 检查个数
  if (arguments.length !== 3) {
    throw new Error("必须传入是那个参数哦～, 理解理解～～");
  }
  var typeC = typeof c;
  // 检查参数类型
  if (typeC === "string" || typeC === "number") {
    // 说明现在调用h函数是形态1
    return vnode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    let children = [];
    //  说明现在调用h函数是形态2
    // 收集children
    c.forEach((item) => {
      if (!typeof item === "object" && item.hasOwnProperty("sel")) {
        throw new Error("传入的数组参数中有项的结果不是h函数");
      }
      children.push(item);
    });
    return vnode(sel, data, children, undefined, undefined);
  } else if (typeC === "object" && c.hasOwnProperty("sel")) {
    //  说明现在调用h函数是形态3
    var children = [c];
    return vnode(sel, data, children, undefined, undefined);
  } else {
    throw new Error("传入的参数的类型不对");
  }
}
