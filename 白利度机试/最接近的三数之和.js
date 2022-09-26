var threeSumClosest = function (nums, target) {
  var res = Infinity;
  var ans = target;
  var len = nums.length;
  if (nums == null || len < 3) return 0;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len; i++) {
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      var item = Math.abs(sum - target);
      if (item < res) {
        res = item;
        ans = sum;
      }
      res = Math.min(res, Math.abs(sum - target));
      if (sum == target) {
        L++;
        R--;
      } else if (sum < target) {
        L++;
      } else if (sum > target) {
        R--;
      }
    }
  }
  return ans;
};
threeSumClosest([-1, 2, 1, -4], 1);
