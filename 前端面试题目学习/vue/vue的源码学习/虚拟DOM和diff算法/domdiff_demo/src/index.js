import h from "./h";
import patch from "./patch";

// var myVnode1 = h("h1", {}, "你好");
// var myVnode2 = h("ul", {}, [h("li", {}, "你好"), h("li", {}, "你不好")]);
// console.log(myVnode1);
// console.log(myVnode2);
const container = document.getElementById("container");
// patch(container, myVnode1);
// demo - 新的节点有文本没有子节点demo
// const myVnode3 = h("section", {}, [h("li", {}, "你好"), h("li", {}, "你不好")]);
// const myVnode4 = h("section", {}, "哼哼哼");
// demo -新的节点没有文本有children
// const myVnode5 = h("section", {}, "哼哼哼");
// const myVnode6 = h("section", {}, [h("li", {}, "你好"), h("li", {}, "你不好")]);
// demo-新旧节点都有children的情况
const myVnode7 = h("ul", {}, [
  h("li", { key: "Q" }, "Q"),
  h("li", { key: "B" }, "B"),
  h("li", { key: "C" }, "C"),
]);
const myVnode8 = h("ul", {}, [
  h("li", { key: "Q" }, "Q"),
  h("li", { key: "C" }, "C"),
  h("li", { key: "A" }, "A"),
  h("li", { key: "D" }, "D"),
  h("li", { key: "M" }, "M"),
  h("li", { key: "L" }, "L"),
]);

patch(container, myVnode7);
patch(myVnode7, myVnode8);
