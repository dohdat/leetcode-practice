/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let q = [];
  let time = 0;
  let fresh = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  //count fresh oranges
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        fresh++;
      }
      if (grid[r][c] === 2) {
        q.push([r, c]);
      }
    }
  }
  if (fresh === 0) return 0;
  let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (q.length && fresh) {
    let len = q.length;
    for (let i = 0; i < len; i++) {
      let [r, c] = q.shift();
      for (let [dr, dc] of directions) {
        let row = dr + r;
        let col = dc + c;
        if (
          row < 0 ||
          row >= rows ||
          col < 0 ||
          col >= cols ||
          grid[row][col] !== 1
        ) {
          continue;
        }
        grid[row][col] = 2;
        q.push([row, col]);
        fresh--;
      }
    }
    time++;
  }
  return fresh === 0 ? time : -1;
};
