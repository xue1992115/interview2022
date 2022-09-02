// 折叠tokens
export default function nestToken(tokens) {
  // 结果数据
  var nestTokens = [];
  // 栈数组
  var sections = [];
  //    遍历tokens
  var len = tokens.length;
  for (var i = 0; i < len; i++) {
    var token = tokens[i];
    switch (token[0]) {
      case "#":
        token[2] = [];
        sections.push(token);
        break;
      case "/":
        // 把栈中所有的数据 吐出来
        let d = sections.pop(token);
        nestTokens.push(d);
        break;
      default:
        if (sections.length) {
          sections[sections.length - 1][2].push(token);
        } else {
          nestTokens.push(token);
        }
    }
  }
  return nestTokens;
}
