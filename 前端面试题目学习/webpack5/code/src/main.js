import "./css/index01.css";
import "./css/index02.less";
import "./css/index03.scss";
import "./css/index04.styl";
import "./css/iconfont.css";
import { count } from "./count";
const add = (a, b) => {
  return a + b;
};
const sum = add(1, 5);
// var test = 122; // eslint会报错的
console.log("nihao");
console.log(sum);
count();
if (module.hot) {
  // 判读是否支持热模块替换
  module.hot.accept("./count.js");
}
