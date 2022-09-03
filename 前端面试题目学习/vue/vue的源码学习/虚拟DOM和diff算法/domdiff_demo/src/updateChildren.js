import createElement from "./createElement";
import patchVnode from "./pacthVnode";
// 判断是否是同一个虚拟的节点
function checkSameVnode(a, b) {
  return a.sel == b.sel && a.key == b.key;
}
export default function updateChildren(parentElm, oldCh, newCh) {
  console.log("我是updateChildren", oldCh, newCh);
  // 双指针算法
  // 旧前
  let oldStartIdx = 0;
  // 新前
  let newStartIdx = 0;
  // 旧后
  let oldEndIdx = oldCh.length - 1;
  // 新后
  let newEndIdx = newCh.length - 1;
  // 旧前节点
  let oldStartVnode = oldCh[0];
  // 旧后节点
  let oldEndVnode = oldCh[oldEndIdx];
  // 新前节点
  let newStartVnode = newCh[0];
  // 新后节点
  let newEndVnode = newCh[newEndIdx];
  // 缓存
  let keyMap = null;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null || oldCh[oldStartIdx] == undefined) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null || oldCh[oldEndIdx] == undefined) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null || newCh[newStartIdx] == undefined) {
      newStartVnode = newCh[++newStartIdx];
    } else if (oldEndVnode == null || newCh[newEndIdx] == undefined) {
      newEndVnode = newCh[--newEndIdx];
    }
    // 命中新前和旧前
    if (checkSameVnode(oldStartVnode, newStartVnode)) {
      console.log("1、新前和旧前命中");
      patchVnode(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (checkSameVnode(oldEndVnode, newEndVnode)) {
      console.log("2、新后和旧后命中");
      patchVnode(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (checkSameVnode(oldStartVnode, newEndVnode)) {
      console.log("3、新后和旧前命中");
      patchVnode(oldStartVnode, newEndVnode);
      // 涉及到移动节点 旧前节点移动到旧后之后
      parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (checkSameVnode(oldEndVnode, newStartVnode)) {
      console.log("4、新前和旧后命中");
      patchVnode(oldEndVnode, newStartVnode);
      // 涉及到移动节点 旧前节点移动到旧后之后
      parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      console.log("5、都没有命中的情况");
      if (!keyMap) {
        keyMap = {};
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
          const key = oldCh[i].key;
          if (key != undefined) {
            keyMap[key] = i;
          }
        }
      }
      const idxInOld = keyMap[newStartVnode.key];
      console.log(idxInOld, "idxInOld");
      if (idxInOld == undefined) {
        // 如果是全新的项，就需要全新创建
        parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm);
      } else {
        // 如果不是全新的项，就需要移动
        const elmToMove = oldCh[idxInOld];
        patchVnode(elmToMove, newStartVnode);
        oldCh[idxInOld] = undefined;
        parentElm.insertBefore(elmToMove.elm, newStartVnode.elm);
      }
      console.log(idxInOld, "idxInOld");
      // 指针下移动只移动新的头
      newStartVnode = newCh[++newStartIdx];
    }
  }
  //循环结束的情况
  if (newStartIdx <= newEndIdx) {
    console.log("new还有剩余的节点没有处理");
    for (let i = newStartIdx; i <= newEndIdx; i++) {
      parentElm.insertBefore(createElement(newCh[i]), oldCh[oldStartIdx].elm);
    }
  }
  if (oldStartIdx <= oldEndIdx) {
    console.log("old还有剩余的节点没有处理");
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      // insertBefore会自动识别null, 会自动插入尾部
      if (oldCh[i]) {
        parentElm.removeChild(oldCh[i].elm);
      }
      console.log(oldCh[i]);
    }
  }
}
