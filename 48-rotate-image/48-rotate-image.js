var rotate = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    for (let r = 0; r < rows; r++) {
        for (let c = r+1; c < cols; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
        }
    }
    // reverse each row
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }
};
