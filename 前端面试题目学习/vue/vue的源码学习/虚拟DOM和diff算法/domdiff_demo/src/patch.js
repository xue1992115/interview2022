import vnode from "./vnode";
import createElement from "./createElement";
import patchVnode from "./pacthVnode";
export default function (oldVnode, newVnode) {
  // （1）判断传入的第一个参数，是dom节点还是虚拟的节点
  // 如果第一个参数传入的是dom节点，就要包装成虚拟的节点
  if (oldVnode.sel == "" || oldVnode.sel === undefined) {
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVnode
    );
    console.log(oldVnode);
  }
  // 判断oldVnode和newVnode是否是同一个节点
  // 是同一个节点，就需要精细化的比较
  // 如果不是同一个节点，就暴力删除和插入
  if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
    console.log("是同一个节点");
    patchVnode(oldVnode, newVnode);
  } else {
    console.log("暴力删除插入， 插入新的删除旧的");
    var newVnodeElm = createElement(newVnode);
    if (oldVnode.elm.parentNode && newVnodeElm) {
      // 插入到老节点之前
      oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
    }
    // 删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}
