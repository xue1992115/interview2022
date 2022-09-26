var reverse = function (x) {
  var str = x + "";
  var len = str.length;
  var str2 = "";
  if (len == 1) {
    return str;
  }
  var res = str.split("").reverse();
  if (x < 0) {
    var el = res.pop();
    res.unshift(el);
  }
  str2 = res.join("");
  if (
    parseInt(str2) > Math.pow(2, 31) - 1 ||
    parseInt(str2) < Math.pow(-2, 31)
  ) {
    return 0;
  }
  return str2;
};
var res = reverse(122);
console.log(res);
