import Vue from "vue";
// 这里引入的vue是运行时的vue,实际上引入的事dist/vue.runtime.esm.js
import App from "./App.vue";
// 该文件是入口文件
Vue.config.productionTip = false;
new Vue({
  // render是一个函数，接收的参数是一个可以创建元素的函数createElement
  // 用于解决引入运行时的vue时，可以创建标签
  // Vue包含两个 Vue核心 + 模版解析器（1/3）因此有很多的版本
  // webpack打包的时候，就不需要模版解析器啦
  render: (h) => h(App),
}).$mount("#app");
