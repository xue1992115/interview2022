/**
 * Vnode函数的功能将传入的参数组合成一个对象返回
 * @param {*} sel 选择器
 * @param {*} data 数据（属性呀之类的）
 * @param {*} children 子节点
 * @param {*} text 文本内容
 * @param {*} elm 元素
 * @returns
 */
export default function (sel, data, children, text, elm) {
  const key = data.key;
  return {
    sel,
    data,
    children,
    text,
    elm,
    key,
  };
}
