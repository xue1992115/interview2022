var base = 10;
let [sum, num] = [1000, 5];
var input = [
  [800, 2, 0],
  [400, 5, 1],
  [300, 5, 1],
  [400, 3, 0],
  [500, 2, 0],
];
sum = sum / base;
let list = {};
//循环遍历
for (var i = 0; i < num; i++) {
  let [a, b, c] = input[i];
  // 表示是附属的产品
  if (c) {
    list[c] = list[c] || [];
    list[c][1] = list[c][1] || [];
    // 存储附属产品到主产品中
    list[c][1].push(a / base, (a / base) * b);
  } else {
    list[i + 1] = [];
    list[i + 1][0] = [a / base, (a / base) * b];
  }
}
list = [...Object.values(list)];
buy(list);
function buy(list) {
  let len = list.length;
  let dp = Array.from({ length: len }, (e) => new Array(sum + 1).fill(0));
  dp[-1] = new Array(sum + 1).fill(0);
  console.log(dp, "hanhan");
  for (var i = 0; i < len; i++) {
    for (var j = 1; j <= sum; j++) {
      if (j < list[i][0][0]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        //一共只有0，1,2个配件3种情况，手写3种判断，w、v分别代表重量和价值
        let w1, w2, v1, v2;
        m[i][1] &&
          ((w1 = m[i][1][0]),
          (v1 = m[i][1][1]),
          (w2 = m[i][1][2]),
          (v2 = m[i][1][3]));
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - m[i][0][0]] + m[i][0][1]
        );
        //+undefined为NaN，NaN做判断都是false
        j >= m[i][0][0] + w1 &&
          (dp[i][j] = Math.max(
            dp[i][j],
            dp[i - 1][j - m[i][0][0] - w1] + m[i][0][1] + v1
          ));
        //此处w2也用dp[i][j](上面w1比较后的结果)作比较，即v1,v2也在此处做了比较了
        j >= m[i][0][0] + w2 &&
          (dp[i][j] = Math.max(
            dp[i][j],
            dp[i - 1][j - m[i][0][0] - w2] + m[i][0][1] + v2
          ));
        j >= m[i][0][0] + w1 + w2 &&
          (dp[i][j] = Math.max(
            dp[i][j],
            dp[i - 1][j - m[i][0][0] - w1 - w2] + m[i][0][1] + v1 + v2
          ));
      }
    }
  }
}
console.log(list, "list");
