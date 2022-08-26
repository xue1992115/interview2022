const arr = [1, 2, 4, 5, 6, 2, 3, 5, 7, 9, 7, 10, 44];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[j - 1]) {
      var item;
      item = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = item;
    }
  }
}
