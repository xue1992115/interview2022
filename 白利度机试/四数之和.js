var fourSum = function (nums, target) {
  let ans = [];
  const len = nums.length;
  var obj = {};
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b); // 排序
  console.log(nums, "nums");
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len - 1; j++) {
    //   if (nums[i] > target) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
      if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
      let L = j + 1;
      let R = len - 1;
      while (L < R) {
        const sum = nums[i] + nums[j] + nums[L] + nums[R];
        console.log(sum);
        if (sum == target) {
          var item = [nums[i], nums[j], nums[L], nums[R]].join("");
          if (!obj[item]) {
            ans.push([nums[i], nums[j], nums[L], nums[R]]);
            obj[item] = true;
          }
          L++;
          R--;
        } else if (sum < target) L++;
        else if (sum > target) R--;
      }
    }
  }
  return ans;
};
var res = fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11);
console.log(res, "res");
