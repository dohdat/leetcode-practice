/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;
    let res = false;
    function backtrack(i, r, c) {
        if (i === word.length) {
            res = true;
            return true;
        }
        if (r < 0 || c < 0 || r >= rows || c >= cols || !board[r][c] || board[r][c] !== word[i]) {
            return false;
        }
        board[r][c] = null;
        backtrack(i + 1, r - 1, c);
        backtrack(i + 1, r + 1, c);
        backtrack(i + 1, r, c - 1);
        backtrack(i + 1, r, c + 1);
        board[r][c] = word[i];
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === word[0]) {
                if (backtrack(0, r, c)) {
                    return res;
                }
            }
        }
    }
    return res;
};
