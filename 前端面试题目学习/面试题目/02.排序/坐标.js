var str = "A10;S20;W10;D30;X;A1A;B10A11;;A10;";
var strs = str.split(";");
var len = strs.length;
var x = 0;
var y = 0;
for (var i = 0; i < len; i++) {
  let str = strs[i];
  let num = Number(str.substr(1));
  if (str.length <= 3 && str.length > 1 && !isNaN(num)) {
    if (str[0] === "A") {
      x -= +num;
    } else if (str[0] === "D") {
      x += +num;
    } else if (str[0] === "W") {
      y += +num;
    } else if (str[0] === "C") {
      y -= +num;
    }
  }
}
console.log(x, y);
