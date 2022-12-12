/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let mins = 0;
  let q = [];
  let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  let freshOranges = 0;
  function isValid(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols) {
      return false;
    } else {
      return true;
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        q.push([r, c]);
      } else if (grid[r][c] === 1) {
        freshOranges++;
      }
    }
  }

  while (q.length && freshOranges) {
    let next = [];
    while (q.length) {
      let [r, c] = q.shift();
      for (let [dr, dc] of dir) {
        let cr = r + dr;
        let cd = c + dc;
        if (isValid(cr, cd) && grid[cr][cd] === 1) {
          grid[cr][cd] = 2;
          freshOranges--;
          next.push([cr, cd]);
        }
      }
    }
    mins++;
    q = next;
  }
  return freshOranges === 0 ? mins : -1;
};
