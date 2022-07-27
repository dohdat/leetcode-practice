/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let res = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === 0) {
                res.push([r, c]);
            }
        }
    }
    for (let [r, c] of res) {
        for (let i = 0; i < rows; i++) {
            matrix[i][c] = 0;
        }
        for (let i = 0; i < cols; i++) {
            matrix[r][i] = 0;
        }
    }
};
