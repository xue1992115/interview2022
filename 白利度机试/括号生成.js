// 暴力穷举法
// 首先先构建一个完成的二叉树，递归遍历，拿到所有的组合
// 然后采用剪枝的方法，验证无效的括号组合 通过记录开括号的数量和闭括号的数量
// 一旦闭括号的数量大于开括号，就不符合，因此要剪枝
function fn2(n) {
  var arr = [];
  var res = "";
  var open = 0;
  var close = 0;
  if (n <= 0) return arr;
  fn(n, res, arr, open, close);
  return arr;
}
function fn(n, res, arr, open, close) {
  if (close > open || open > n) {
    // 剪枝
    return;
  }
  var len = res.length;
  if (len == 2 * n) {
    arr.push(res);
    return;
  }
  fn(n, res + "(", arr, open + 1, close);
  fn(n, res + ")", arr, open, close + 1);
}
var res = fn2(4);
console.log(res, "res");
