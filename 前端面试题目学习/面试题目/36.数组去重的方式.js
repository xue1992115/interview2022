const arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9];
// 方法1 遍历 + includes/indexOf
const arr2 = [];
arr.map((item) => {
  if (!arr2.includes(item)) {
    arr2.push(item);
  }
});
console.log(arr2, "arr2");

// 方法2 Set

const arr3 = Array.from(new Set(arr));
console.log(arr3, "arr3");

// 方法3 排序之后，在去重
const arr4 = arr.sort();
for (var i = 1; i < arr4.length; i++) {
  if (arr4[i] === arr4[i - 1]) {
    arr4.splice(i, 1);
  }
}
console.log(arr4, "arr4");

// 方法4
const arr5 = Object.values({ ...arr });
console.log(arr5, "arr5");
