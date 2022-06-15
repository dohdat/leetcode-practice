/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let res = 0;
    function backtrack(r, c) {
        if (r < 0 || c < 0 || r >= row || c >= col || grid[r][c] === '0') {
            return;
        }
        grid[r][c] = '0';
        backtrack(r + 1, c);
        backtrack(r - 1, c);
        backtrack(r, c + 1);
        backtrack(r, c - 1);
    }
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] === '1') {
                res++;
                backtrack(r, c);
            }
        }
    }
    return res;
};
