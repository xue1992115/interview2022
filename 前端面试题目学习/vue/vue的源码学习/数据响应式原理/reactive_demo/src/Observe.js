/**
 * 判断传入的数据类型，只为对象工作
 * @param {*} value
 * @returns
 */
import Observer from "./observer";
export default function observe(value) {
  if (typeof value !== "object") return;
  var ob;
  if (typeof value.__ob__ === "undefined") {
    value.__ob__ = new Observer(value);
  } else {
    ob = value.__ob__;
  }
  return ob;
}
