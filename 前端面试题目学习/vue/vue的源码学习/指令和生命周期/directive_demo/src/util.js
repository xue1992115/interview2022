/**
 * 该函数的功能是定义一个属性是否可以枚举
 * @param {*} obj
 * @param {*} key
 * @param {*} value
 * @param {*} enumerable
 */
export default function def(obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    enumerable,
    writable: true,
    configurable: true,
  });
}
