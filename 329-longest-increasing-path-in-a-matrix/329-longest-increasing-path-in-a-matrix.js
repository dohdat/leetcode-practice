/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  if (matrix.length === 0) return 0;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let max = 0;
  let preMap = new Map();
  function dfs(r, c, prev) {
    let curKey = `${r}|${c}`;
    if (r < 0 || r >= rows || c < 0 || c >= cols || matrix[r][c] <= prev) {
      return 0;
    }
    let num = matrix[r][c];
    if (preMap.has(curKey)) return preMap.get(curKey);
    let left = dfs(r - 1, c, num);
    let right = dfs(r + 1, c, num);
    let down = dfs(r, c - 1, num);
    let up = dfs(r, c + 1, num);
    preMap.set(curKey, Math.max(left, right, up, down) + 1);
    max = Math.max(max, preMap.get(curKey));
    return preMap.get(curKey);
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let key = `${r}|${c}`;
      if (!preMap.has(key)) {
        dfs(r, c, -Infinity);
      }
    }
  }
  return max;
};
