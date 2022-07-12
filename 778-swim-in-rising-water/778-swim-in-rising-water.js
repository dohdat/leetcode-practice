/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let n = grid.length;
  let dst = [];
  for (let i = 0; i < n; i++) {
    let temp = new Array(n).fill(Infinity);
    dst.push(temp);
  }
  dst[0][0] = grid[0][0];
  let q = [[0, 0]];
  while (q.length > 0) {
    let cur = q.shift();
    let [x, y] = cur;
    //k = 4 directions
    for (let k = 0; k < 4; k++) {
      let xx = x + dx[k];
      let yy = y + dy[k];
      //boundaries to skip
      if (xx < 0 || xx >= n || yy < 0 || yy >= n) {
        //cannot use return, use continue
        continue;
      }
      if (Math.max(grid[xx][yy], dst[x][y]) < dst[xx][yy]) {
        dst[xx][yy] = Math.max(grid[xx][yy], dst[x][y]);
        q.push([xx, yy]);
      }
    }
  }
  return dst[n - 1][n - 1];
};
