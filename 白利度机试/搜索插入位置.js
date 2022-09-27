var searchInsert = function (nums, target) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    let mid = parseInt((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (!nums[right] || nums[right] < target) {
    return right + 1;
  }
  return right;
};

var res = searchInsert([1, 3], 0);
console.log(res, "res");
