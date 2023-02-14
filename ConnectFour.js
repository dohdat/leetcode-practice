// Define the game board
const board = [
  ["-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-"]
];

// Define player colors
const player1 = "R";
const player2 = "Y";

// Define the current player
let currentPlayer = player1;

// Print the current board
function printBoard() {
  console.log(board.map(row => row.join(" ")).join("\n"));
  console.log("0 1 2 3 4 5 6");
}

// Prompt the current player for a move
function promptMove() {
  return prompt(`Player ${currentPlayer}, please choose a column (0-6):`);
}

// Check if a given move is valid
function isValidMove(column) {
  return board[0][column] === "-";
}

// Make a move for the current player
function makeMove(column) {
  // Find the lowest empty slot in the column
  let row;
  for (let i = 5; i >= 0; i--) {
    if (board[i][column] === "-") {
      row = i;
      break;
    }
  }
  // Make the move
  board[row][column] = currentPlayer;
}

// Check if the current player has won
function checkWin() {
  // Check rows
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      if (
        board[row][col] === currentPlayer &&
        board[row][col + 1] === currentPlayer &&
        board[row][col + 2] === currentPlayer &&
        board[row][col + 3] === currentPlayer
      ) {
        return true;
      }
    }
  }
  // Check columns
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 7; col++) {
      if (
        board[row][col] === currentPlayer &&
        board[row + 1][col] === currentPlayer &&
        board[row + 2][col] === currentPlayer &&
        board[row + 3][col] === currentPlayer
      ) {
        return true;
      }
    }
  }
  // Check diagonal (down-right)
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      if (
        board[row][col] === currentPlayer &&
        board[row + 1][col + 1] === currentPlayer &&
        board[row + 2][col + 2] === currentPlayer &&
        board[row + 3][col + 3] === currentPlayer
      ) {
        return true;
      }
    }
  }
  // Check diagonal (down-left)
  for (let row = 0; row < 3; row++) {
    for (let col = 3; col < 7; col++) {
      if (
        board[row][col] === currentPlayer &&
        board[row + 1][col - 1] === currentPlayer &&
        board[row + 2][col - 2] === currentPlayer &&
        board[row + 3][col - 3] === currentPlayer
      ) {
        return true;
      }
    }
  }
  // No win found
  return false;
}

// Start the game loop
while (true) {
  // Print the current board
  printBoard();
  // Prompt the current player for a move
  let move = promptMove();

  // Validate the move
  if (move < 0 || move > 6 || !isValidMove(move)) {
    console.log("Invalid move, please try again.");
    continue;
  }

  // Make the move
  makeMove(move);

  // Check for a win
  if (checkWin()) {
    console.log(`Player ${currentPlayer} wins!`);
    printBoard();
    break;
  }

  // Check for a tie
  let isTie = true;
  for (let col = 0; col < 7; col++) {
    if (isValidMove(col)) {
      isTie = false;
      break;
    }
  }
  if (isTie) {
    console.log("The game is a tie!");
    printBoard();
    break;
  }
  // Switch to the other player
currentPlayer = currentPlayer === player1 ? player2 : player1;
  
  
}
