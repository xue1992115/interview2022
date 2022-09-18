function mj(zb, list) {
  for (let i = 0; i < list.length; i++) {
    let oo = list[i];
    if (zb[0] < oo[0] && zb[2] > oo[0]) {
      let zb1 = [...zb];
      zb1[2] = oo[0];
      zb[0] = oo[0];
      mj(zb1, list);
    }
    if (zb[0] < oo[2] && zb[2] > oo[2]) {
      let zb1 = [...zb];
      zb1[0] = oo[2];
      zb[2] = oo[2];
      mj(zb1, list);
    }
    if (zb[1] < oo[1] && zb[3] > oo[1]) {
      let zb1 = [...zb];
      zb1[3] = oo[1];
      zb[1] = oo[1];
      mj(zb1, list);
    }
    if (zb[1] < oo[3] && zb[3] > oo[3]) {
      let zb1 = [...zb];
      zb1[1] = oo[3];
      zb[3] = oo[3];
      mj(zb1, list);
    }
    if (zb[0] >= oo[0] && zb[1] >= oo[1] && zb[2] <= oo[2] && zb[3] <= oo[3]) {
      return null;
    }
  }
  list.push(zb);
}

var rectangleArea = function (rectangles) {
  let list = [];
  for (let i = 0; i < rectangles.length; i++) {
    mj(rectangles[i], list);
  }
  let lists = 0n;
  list = list.filter((val) => val.length == 4);
  for (let i = 0; i < list.length; i++) {
    lists += BigInt(list[i][2] - list[i][0]) * BigInt(list[i][3] - list[i][1]);
  }
  return lists % BigInt(10 ** 9 + 7);
};
var rectangles = [
  [0, 0, 2, 2],
  [1, 0, 2, 3],
  [1, 0, 3, 1],
];
rectangleArea(rectangles);
