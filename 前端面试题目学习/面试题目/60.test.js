var str = "100[leetcode]";
decodeString(str);
function decodeString(str) {
  const match = str.split("");
  // 用一个栈来存储遍历
  let stack = [],
    // 存储数字
    multi = 0,
    // 存储字母
    result = "";

  for (var i = 0; i < match.length; i++) {
    var s = match[i];
    if (s === "[") {
      // 当 `s` 为 `[` 时，将当前 `multi` 和 result 入栈，并分别置空置 0
      stack.push([multi, result]);
      result = "";
      multi = 0;
    } else if (s === "]") {
      // 当 `s` 为 `]` 时，`stack` 出栈，拼接字符串 `result = res + result.repeat(mul)`
      const [mul, res] = stack.pop();
      result = res + result.repeat(mul);
    } else if (!isNaN(s)) {
      multi = parseInt(str.slice(i)); // 当 `s` 为数字时，将数字字符转化为数字 `multi`，用于后续倍数计算
      i = i + (multi + "").length - 1;
    } else {
      result += s; // 当 `s` 为字母时，在 `result` 尾部添加 `s`
    }
  }
  return result;
}
