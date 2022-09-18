function stockPairs(stocksProfit, target) {
  stocksProfit.sort((a, b) => {
    return a - b;
  });
  console.log(stocksProfit);
  // Write your code here
  const obj = {};
  var len = stocksProfit.length;
  var count = 0;
  var arr = [];
  // 遍历数组
  for (var i = 0; i < len; i++) {
    var cur = stocksProfit[i];
    var remain = target - cur;
    if (obj[remain]) {
      count++;
      obj[remain] = false;
      arr.push([cur, remain]);
    } else {
      obj[cur] = true;
    }
  }
  console.log(arr, "arr");
  console.log(count);
  return count;
}
stockPairs(
  [
    407, 1152, 403, 1419, 689, 1029, 108, 128, 1307, 300, 775, 622, 730, 978,
    526, 943, 127, 566, 869, 715, 983, 820, 1394, 901, 606, 497, 98, 1222, 843,
    600, 1153, 302, 1450, 1457, 973, 1431, 217, 936, 958, 1258, 970, 1155, 1061,
    1341, 657, 333, 1151, 790, 101, 588, 263, 101, 534, 747, 405, 585, 111, 849,
    695, 1256, 1508, 139, 336, 1430, 615, 1295, 550, 783, 575, 992, 709, 828,
    1447, 1457, 738, 1024, 529, 406, 164, 994, 1008, 50, 811, 564, 580, 952,
    768, 863, 1225, 251, 1032, 1460,
  ],
  1558
);
