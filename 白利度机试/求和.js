function stockPairs(stocksProfit, target) {
  stocksProfit.sort((a, b) => a - b);
  // Write your code here
  var obj = {};
  var len = stocksProfit.length;
  var count = 0;
  for (var i = 0; i < len; i++) {
    var item = stocksProfit[i];
    var num = target - item;
    if (obj[num]) {
      count++;
      obj[num] = false;
    } else {
      obj[item] = true;
    }
  }
  return count;
}
stockPairs([5, 7, 9, 13, 11, 6, 6, 3, 3], 12);
