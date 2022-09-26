var isMatch = function (s, p) {
  let sLen = s.length; // 2
  let pLen = p.length; // 1
  let dp = new Array(sLen + 1);
  for (let i = 0; i <= sLen; i++) {
    dp[i] = new Array(pLen + 1).fill(false);
  }
  dp[0][0] = true;
  console.log(dp, "dp");
  for (let i = 2; i <= pLen; i += 2) {
    if (p[i - 1] === "*") dp[0][i] = dp[0][i - 2];
  }
  console.log(dp, "nihao");
  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= pLen; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === ".")
        dp[i][j] = dp[i - 1][j - 1];
      else if (p[j - 1] === "*") {
        if (p[j - 2] !== s[i - 1] && p[j - 2] !== ".") {
          dp[i][j] = dp[i][j - 2];
        } else {
          dp[i][j] = dp[i - 1][j] || dp[i][j - 2] || dp[i][j - 1];
        }
      }
    }
  }
  return dp[sLen][pLen];
};
var res = isMatch("ab", ".*");
console.log(res, "res");
