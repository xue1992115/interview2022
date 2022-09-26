var divide = function (dividend, divisor) {
  var res = dividend / divisor;
  if (res > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  if (res < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  }
  if (res >= 0) {
    return Math.floor(res);
  } else if(res < 0) {
    return Math.ceil(res);
  }
};
var res = divide(0, 1);
console.log(res, "res");
