import Watcher from "./Watcher.js";

export default class Compile {
  constructor(el, vue) {
    // vue实例
    this.$vue = vue;
    // 挂载点
    this.$el = document.querySelector(el);

    // 如果用户传入了挂载点
    if (this.$el) {
      // 调用函数，让节点变为fragment，类似于mustache中的tokens。实际上用的是AST，这里是轻量级的，fragment
      let $fragment = this.node2Fragment(this.$el);
      // 编译
      this.compile($fragment);
      // 替换好的内容要上树
      this.$el.appendChild($fragment);
    }
  }

  node2Fragment(el) {
    let fragment = document.createDocumentFragment();
    let child;
    while ((child = el.firstChild)) {
      fragment.appendChild(child);
    }
    console.log(fragment);
    return fragment;
  }

  compile(el) {
    // 得到子元素
    let childNodes = el.childNodes;
    let self = this;

    let reg = /\{\{(.*)\}\}/;

    childNodes.forEach((node) => {
      let text = node.textContent;
      // 1: 元素 2:属性 3: 文本
      if (node.nodeType === 1) {
        self.compileElement(node);
      } else if (node.nodeType === 3 && reg.test(text)) {
        // let text = node.textContent;
        // console.log(text);
        let name = text.match(reg)[1];
        self.compileText(node, name);
      }
    });
  }

  compileElement(node) {
    console.log(node);
    // 这里是真正的属性列表
    let nodeAttrs = node.attributes;

    Array.prototype.slice.call(nodeAttrs).forEach((attr) => {
      // 分析指令
      let attrName = attr.name;
      let value = attr.value;
      // 指令都是以v-开头的
      let dir = attrName.substring(2);

      // 看看是不是指令
      if (attrName.indexOf("v-") === 0) {
        if (dir === "model") {
          // console.log('发现了model指令', value);
          new Watcher(self.$vue, value, (value) => {
            node.value = value;
          });
          var v = self.getVueVal(self.$vue, value);
          node.value = v;

          // 添加监听
          node.addEventListener("input", (e) => {
            var newVal = e.target.value;
            self.setVueVal(self.$vue, value, newVal);
            v = newVal;
          });
        } else if (dir === "if") {
          console.log("发现了if指令", value);
        }
      }
      // console.log(dir)
    });
  }

  compileText(node, name) {
    node.textContent = this.getVueVal(this.$vue, name);
    new Watcher(this.$vue, name, (value) => {
      node.textContent = value;
    });
  }

  getVueVal(vue, exp) {
    var val = vue;
    exp = exp.split(".");
    exp.forEach((k) => {
      val = val[k];
    });

    return val;
  }

  setVueVal(vue, exp, value) {
    var val = vue;
    exp = exp.split(".");
    exp.forEach((k, i) => {
      if (i < exp.length - 1) {
        val = val[k];
      } else {
        val[k] = value;
      }
    });
  }
}
