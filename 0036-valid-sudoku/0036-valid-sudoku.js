function isValidSudoku(board) {
  let rows = board.length;
  let cols = board[0].length;
  let set = new Set();

  // Each row must contain the digits 1-9
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let v = board[r][c];
      if (v !== ".") {
        if (set.has(v)) return false;
        set.add(v);
      }
    }
    set.clear();
  }

  // Each column must contain the digits 1-9
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      let v = board[r][c];
      if (v !== ".") {
        if (set.has(v)) return false;
        set.add(v);
      }
    }
    set.clear();
  }

  // Each region (3x3 grid) must contain the digits 1-9
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          let rowIndex = r * 3 + k;
          let colIndex = c * 3 + l;
          let v = board[rowIndex][colIndex];
          if (v !== ".") {
            if (set.has(v)) return false;
            set.add(v);
          }
        }
      }
      set.clear();
    }
  }

  return true;
}
