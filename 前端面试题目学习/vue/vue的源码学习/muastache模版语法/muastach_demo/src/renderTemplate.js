export default function renderTemplate(tokens, data) {
  var resStr = "";
  var len = tokens.length;
  for (var i = 0; i < len; i++) {
    var token = tokens[i];
    if (token[0] === "text") {
      resStr += token[1];
    } else if (token[0] === "name") {
      resStr += data[token[1]];
    } else if (token[0] === "#") {
      console.log(token[2]);
      // 采用递归的方式
      //   renderTemplate(token[2], data);
    }
  }
  console.log(resStr);
  return resStr;
}
