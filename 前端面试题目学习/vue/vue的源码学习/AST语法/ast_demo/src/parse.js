export default function parse(templateStr) {
  // 指针
  var index = 0;
  var len = templateStr.length - 1;
  // 剩余部分
  var rest = "";
  var regExpStart = /^\<([a-z]+[1-6]?)\>/;
  var regExpEnd = /^\<\/([a-z]+[1-6]?)\>/;
  var wordExpEnd = /^([^\<\>]+)\<\/([a-z]+[1-6]?)\>/;
  // 准备两个栈
  var stack1 = [];
  var stack2 = [];
  while (index < len) {
    rest = templateStr.substring(index);
    if (regExpStart.test(rest)) {
      // 检测开始标记
      let startTag = rest.match(regExpStart)[1];
      console.log("开始tag:", startTag);
      // 将开始标记推入栈中
      stack1.push(startTag);
      stack2.push([]);
      index += startTag.length + 2;
    } else if (regExpEnd.test(rest)) {
      // 检测结束标记
      let endTag = rest.match(regExpEnd)[1];
      console.log("结束tag:", endTag);
      if (endTag === stack1[stack1.length - 1]) {
        let pop_tag = stack1.pop();
        let pop_arr = stack2.pop();
        if (stack2.length) {
          if (!stack2[stack2.length - 1].children) {
            stack2[stack2.length - 1].children = [];
          }
          stack2[stack2.length - 1].children.push(pop_arr);
        }
      } else {
        throw new Error("标签没有封闭");
      }
      index += endTag.length + 3;
    } else if (wordExpEnd.test(rest)) {
      // 检测结束标记
      let word = rest.match(wordExpEnd)[1];
      console.log("word:", word);
      stack2[stack2.length - 1].push(word);
      index += word.length;
    } else {
      index++;
    }
    console.log(stack1, stack2);
  }
}
