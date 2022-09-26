var res = 0;
var islandPerimeter = function (grid) {
  var len = grid.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      var up = i - 1;
      var down = i + 1;
      var left = j - 1;
      var right = j + 1;
      if (up < 0) {
        isOne(grid[i][j]);
        // if (grid[i][j] == 1) {
        //   res++;
        // }
      }
      if (down >= len) {
        isOne(grid[i][j]);

        // if (grid[i][j] == 1) {
        //   res++;
        // }
      }
      if (left < 0) {
        isOne(grid[i][j]);

        // if (grid[i][j] == 1) {
        //   res++;
        // }
      }
      if (right >= grid[i].length) {
        isOne(grid[i][j]);
        // if (grid[i][j] == 1) {
        //   res++;
        // }
      }
      isZero(grid[up][j]);
      isZero(grid[down][j]);
      isZero(grid[i][left]);
      isZero(grid[i][right]);
      //   if (grid[up][j] == 0) {
      //     res++;
      //   }
      //   if (grid[down][j] == 0) {
      //     res++;
      //   }
      //   if (grid[i][left] == 0) {
      //     res++;
      //   }
      //   if (grid[i][right] == 0) {
      //     res++;
      //   }
    }
  }
};
function isZero(num) {
  if (num == 0) {
    res++;
  }
}
function isOne(num) {
  if (num == 1) {
    res++;
  }
}
islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]);
