/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let rows = board.length;
  let cols = board[0].length;
  function hasUniqueDigits(array) {
    let set = new Set();
    for (let v of array) {
      if (v !== ".") {
        if (set.has(v)) return false;
        set.add(v);
      }
    }
    return true;
  }
  //each row must contain digits 1-9
  for (let r = 0; r < rows; r++) {
    if (!hasUniqueDigits(board[r])) {
      return false;
    }
  }
  //each column must contain digits 1-9
  for (let c = 0; c < cols; c++) {
    let column = [];
    for (let r = 0; r < rows; r++) {
      column.push(board[r][c]);
    }
    if (!hasUniqueDigits(column)) {
      return false;
    }
  }

  // Each region (3x3 grid) must contain the digits 1-9
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      let region = [];
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          let rowIndex = r * 3 + k;
          let colIndex = c * 3 + l;
          region.push(board[rowIndex][colIndex]);
        }
      }
      if (!hasUniqueDigits(region)) return false;
    }
  }

  return true;
};
