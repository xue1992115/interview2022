var arr = ["4", "0 0", "1 2", "3 1", "2 -1"];
var res = [];
var num = arr.shift();
var count = 0;
if (num < 4) {
  console.log(count);
} else {
  var len = arr.length;
  // 将元素放入二维数组中
  for (var i = 0; i < len; i++) {
    var item = arr[i].split(" ");
    res.push(item);
  }
  //采用 暴力穷举法
  var resLen = res.length;
  for (var i = 0; i < resLen - 3; i++) {
    for (var m = i + 1; m < resLen - 2; m++) {
      for (var n = m + 1; n < resLen - 1; n++) {
        for (var k = n + 1; k < resLen; k++) {
          if (isOk(res[i], res[m], res[n], res[k])) {
            count++;
          }
        }
      }
    }
  }
  function isOk() {
    var arr = [...arguments];
    var res = [];
    var d1 = distance(arr[0], arr[1]);
    var d2 = distance(arr[0], arr[2]);
    var d3 = distance(arr[0], arr[3]);
    var d4 = distance(arr[1], arr[2]);
    var d5 = distance(arr[1], arr[3]);
    var d6 = distance(arr[2], arr[3]);
    res = [d1, d2, d3, d4, d5, d6];
    res.sort((a, b) => {
      return a - b;
    });
    return res[0] === res[3] && res[4] === res[5] && res[3] < res[4];
  }
  function distance(item1, item2) {
    var m = item1[0] - item2[0];
    var n = item1[1] - item2[1];
    return parseInt(m * m + n * n);
  }
}
