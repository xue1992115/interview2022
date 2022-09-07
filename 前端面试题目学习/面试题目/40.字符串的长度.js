// 英文字母一个 中文两个
const str = "test 中国";

function strLength(str) {
  let bytes = 0;
  for (var i = 0; i < str.length; i++) {
    console.log(str);
    if (str.charCodeAt(i) > 255) bytes++;
    bytes++;
  }
  return bytes;
}
console.log(strLength(str));
