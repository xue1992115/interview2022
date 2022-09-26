// 采用双指针的方式
var maxArea = function (height) {
  var left = 0;
  var right = height.length - 1;
  var max = 0;
  while (left < right) {
    let tmp = (right - left) * Math.min(height[left], height[right]);
    if (tmp > max) {
      max = tmp;
    }
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
var res = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(res, "res");
