/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  let rows = board.length;
  let cols = board[0].length;
  function dfs(r, c) {
    //check for boundaries
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== "O") {
      return;
    }
    board[r][c] = "T";
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
        //mark all these border lines to T
        dfs(r, c);
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
      }
      if (board[r][c] === "T") {
        board[r][c] = "O";
      }
    }
  }
  
};
