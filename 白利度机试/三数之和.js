var threeSum = function (nums) {
  let ans = [];
  const len = nums.length;
  var obj = {};
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b); // 排序

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        var item = [nums[i], nums[L], nums[R]].join("");
        if (!obj[item]) {
          ans.push([nums[i], nums[L], nums[R]]);
          obj[item] = true;
        }
        L++;
        R--;
      } else if (sum < 0) L++;
      else if (sum > 0) R--;
    }
  }
  return ans;
};
var res = threeSum([-2, 0, 0, 2, 2]);
console.log(res, "res");
