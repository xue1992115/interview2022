var line = "ggg".split("");
if (line.length === 0) {
  console.log(0);
} else {
  var count = 1;
  var i = 1;
  while (i < line.length) {
    if (line[i] != line[i - 1]) {
      count++;
      i++;
    } else {
      line.splice(i - 1, 2);
      count--;
      i = i - 1;
    }
  }
  console.log(count);
}
