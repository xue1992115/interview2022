var romanToInt = function (s) {
  var arr = s.split("");
  var obj = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var len = arr.length;
  var sum = 0;
  for (var i = 0; i < len; i++) {
    if (i < len - 1) {
      var item = arr[i] + arr[i + 1];
      if (obj[item]) {
        sum += obj[item];
        i++;
        continue;
      }
    }
    sum += obj[arr[i]];
  }
  return sum;
};
var res = romanToInt('MD');
console.log(res, "res");
