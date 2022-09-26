var arr = [0, 1, 4, 3, 5, 6, 2];

var max = Math.max.call(this, arr);
console.log(max, "max");
var l = 0;
var r = arr.length - 1;
var temp = 0;
var index = 0;
while (l < r) {
  if (arr[l] < arr[r]) {
    index = arr[l] > temp ? l : index;
    temp = arr[l];
    l++;
  } else {
    r--;
  }
}
console.log(index);
