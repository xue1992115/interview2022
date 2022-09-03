// 该函数式真正的创建节点的
export default function createElement(vnode) {
  var domNode = document.createElement(vnode.sel);
  if (
    vnode.text != "" &&
    (vnode.children == undefined || vnode.children.length == 0)
  ) {
    // 节点的内部是文本
    domNode.innerText = vnode.text;
  } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
    // 内部是子节点，通过递归创建子节点
    for (var i = 0; i < vnode.children.length; i++) {
      let ch = vnode.children[i];
      let chDOM = createElement(ch);
      domNode.appendChild(chDOM);
    }
  }
  vnode.elm = domNode;
  // vnode.elm是一个纯dom
  return vnode.elm;
}
