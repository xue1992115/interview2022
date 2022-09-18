var findMedianSortedArrays = function (nums1, nums2) {
  var arr = nums1.concat(nums2).sort((a, b) => a - b);
  var len = arr.length;
  if (len % 2 === 0) {
    var mid = len / 2;
    var res = (arr[mid] + arr[mid - 1]) / 2;
    console.log(parseFloat(res).toFixed(5));
  } else {
    var mid = Math.floor(len / 2);
    console.log(parseFloat(arr[mid]).toFixed(5));
  }
};
findMedianSortedArrays([1, 2], [3]);
