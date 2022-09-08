/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  let size = 3;
  let board = new Array(size).fill("").map(_ => new Array(size).fill(""));
  let player = "A";
  function checkDia(player) {
    let diaCount = 0;
    let antiDiaCout = 0;
    let dia = [[0, 0], [1, 1], [2, 2]];
    let antiDia = [[0, 2], [1, 1], [2, 0]];
    for (let [r, c] of dia) {
      if (board[r][c] === player) {
        diaCount++;
      }
      if (diaCount === size) {
        return true;
      }
    }
    for (let [r, c] of antiDia) {
      if (board[r][c] === player) {
        antiDiaCout++;
      }
      if (antiDiaCout === size) {
        return true;
      }
    }
    return false;
  }
  function checkRows(player) {
    for (let r of board) {
      let count = r.filter(x => x === player).length;
      if (count === size) {
        return true;
      }
    }
    return false;
  }

  function checkCols(player) {
    let directions = [
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]]
    ];
    for (let col of directions) {
      let count = 0;
      for (let [r, c] of col) {
        if (board[r][c] === player) {
          count++;
        }
        if (count === size) {
          return true;
        }
      }
    }
    return false;
  }

  function checkDraw() {
    let count = 0;
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[0].length; c++) {
        if (board[r][c]) {
          count++;
        }
      }
    }
    return count === 9;
  }

  for (let [r, c] of moves) {
    let curPlayer = player === "A" ? "X" : "O";
    board[r][c] = curPlayer;
    if (checkRows(curPlayer) || checkCols(curPlayer) || checkDia(curPlayer)) {
      return player;
    }
    player = player === "A" ? "B" : "A";
  }

  function printBoard() {
    for (let r of board) {
      console.log(r, "\n");
    }
  }
  printBoard();

  return checkDraw() ? "Draw" : "Pending";
};
