import createElement from "./createElement";
import updateChildren from "./updateChildren";

export default function patchVnode(oldVnode, newVnode) {
  // 判断新旧节点是否相同，如果相同就什么否不做
  if (oldVnode === newVnode) return;
  // 判断新节点有text，并且没有子节点
  if (
    newVnode.text != null &&
    (!newVnode.children || !newVnode.children.length)
  ) {
    // 老的节点中的text和新的不同，新的text替换就的
    if (newVnode.text !== oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text;
    }
  } else {
    if (oldVnode.children != undefined && oldVnode.children.length > 0) {
      updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);
    } else {
      // 新的没有children, 老的有children
      // 1、清空老节点中的text
      oldVnode.elm.innerHTML = "";
      // 2、追加新的节点的内容
      for (let i = 0; i < newVnode.children.length; i++) {
        let dom = createElement(newVnode.children[i]);
        oldVnode.elm.appendChild(dom);
      }
    }
  }
}
