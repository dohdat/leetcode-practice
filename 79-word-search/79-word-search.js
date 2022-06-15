/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let row = board.length;
    let col = board[0].length;
    let res = false;

    function backtrack(r, c, i) {
        //if i index is equal to word length, which meant we found our word
        if (i === word.length) {
            res = true;
            return;
        }
        //check if we are out of bounds
        if (r < 0 || c < 0 || r >= row || c >= col || word[i] !== board[r][c] || !board[r][c]) {
            return;
        }
        // mark our path so we dont go back and forth
        board[r][c] = null;
        backtrack(r + 1, c, i + 1) || backtrack(r - 1, c, i + 1) || backtrack(r, c + 1, i + 1) || backtrack(r, c - 1, i + 1);
        board[r][c] = word[i]; //reset our board, for backtracking
    }

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (board[r][c] === word[0]) {
                backtrack(r, c, 0);
                if (res) return true;
            }
        }
    }
    return false;
};
