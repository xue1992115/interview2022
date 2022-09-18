var longestPalindrome = function (s) {
  var len = s.length;
  if (len === 1) {
    return s;
  }
  if (len === 2) {
    if (s[0] == s[1]) {
      return s;
    } else {
      return s[0];
    }
  }
  if (len >= 3) {
    var arr = [];
    for (var i = 0; i < len; i++) {
      arr.push(new Array(len).fill(0));
      arr[i][i] = true;
    }
  }
  // 记录最长回文子串下标的位置
  var first = 0;
  var last = 0;
  for (var l = 2; l <= len; l++) {
    for (var j = l - 1; j < len; j++) {
      if (s[j] == s[j - l + 1]) {
        if (l > 3) {
          if (arr[j - l + 2][j - 1]) {
            arr[j - l + 1][j] = true;
            first = j - l + 1;
            last = j;
          } else {
            arr[j - l + 1][j] = false;
          }
        } else {
          arr[j - l + 1][j] = true;
          first = j - l + 1;
          last = j;
        }
      } else {
        arr[j - l + 1][j] = false;
      }
    }
  }
  return s.slice(first, last + 1);
};
const res = longestPalindrome("aaaa");
console.log(res);
