var lengthOfLongestSubstring = function (s) {
  const arr = [];
  let max = 0;
  for (var i = 0; i < s.length; i++) {
    const index = arr.indexOf(s[i]);
    if (index === -1) {
      arr.push(s[i]);
    } else {
      arr.push(s[i]);
      // splice是删除字符串，改变的是数组自身
      arr.splice(0, index + 1);
    }
    max = Math.max(arr.length, max);
  }
  return max;
};
var res = lengthOfLongestSubstring("abcabcbb");
console.log(res, "res");
