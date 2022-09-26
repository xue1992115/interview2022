var myAtoi = function (s) {
  var num = parseInt(s);
  if (!isNaN(num)) {
    if (num >= Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1;
    } else if (num < Math.pow(-2, 31)) {
      return Math.pow(-2, 31);
    }
  }
  return isNaN(num) ? 0 : num;
};
var res = myAtoi("-91283472332");
console.log(res, "han");
