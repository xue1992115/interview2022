var removeDuplicates = function (nums) {
  var arr = new Set(nums);
  var newArr = Array.from(arr);
  return newArr;
};
var res = removeDuplicates([1, 1, 2]);
console.log(res, "res");
