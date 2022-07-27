var isValidSudoku = function(board) {
    let rowsLen = board.length;
    let colsLen = board[0].length;
    const rows = new Array(rowsLen).fill().map(() => new Set());
    const cols = new Array(colsLen).fill().map(() => new Set());
    const squares = new Array(colsLen).fill().map(() => new Set());

    for (let r = 0; r < rowsLen; r++) {
        for (let c = 0; c < colsLen; c++) {
            if (board[r][c] === '.') continue;

            let cur = board[r][c];

            // get square (0-8)
            const squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // no duplicate entries
            if (rows[r].has(cur) || cols[c].has(cur) || squares[squareIndex].has(cur)) {
                return false;
            }

            // add number to sets
            rows[r].add(cur);
            cols[c].add(cur);
            squares[squareIndex].add(cur);
        }
    }

    return true;
};
