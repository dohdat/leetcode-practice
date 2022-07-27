var isValidSudoku = function(board) {
    const rows = new Array(9).fill().map(() => new Set());
    const cols = new Array(9).fill().map(() => new Set());
    const squares = new Array(9).fill().map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue;

            const val = board[i][j];

            // get square (0-8)
            const squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // no duplicate entries
            if (rows[i].has(val) || cols[j].has(val) || squares[squareIndex].has(val)) {
                return false;
            }

            // add number to sets
            rows[i].add(val);
            cols[j].add(val);
            squares[squareIndex].add(val);
        }
    }

    return true;
};
