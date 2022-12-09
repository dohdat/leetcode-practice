/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  let rows = mat.length;
  let cols = mat[0].length;
  let q = [];
  let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  function isValid(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols) {
      return false;
    } else {
      return true;
    }
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        q.push([r, c]);
      } else {
        mat[r][c] = "#";
      }
    }
  }
  for (let [r, c] of q) {
    for (let [dr, dc] of dir) {
      let cr = r + dr;
      let cd = c + dc;
      if (isValid(cr, cd) && mat[cr][cd] === "#") {
        mat[cr][cd] = mat[r][c] + 1;
        q.push([cr, cd]);
      }
    }
  }
  return mat;
};
