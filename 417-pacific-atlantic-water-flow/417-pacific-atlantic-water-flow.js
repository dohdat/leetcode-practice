/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    if (heights.length === 0) return [];
    let rows = heights.length;
    let cols = heights[0].length;

    let atlantic = [];
    let pacific = [];

    function dfs(r, c, prev, ocean) {
        if (r < 0 || c < 0 || r >= rows || c >= cols) {
            return;
        }
        if (heights[r][c] < prev) return;
        if (ocean[r][c]) return;
        ocean[r][c] = true;
        dfs(r + 1, c, heights[r][c], ocean);
        dfs(r - 1, c, heights[r][c], ocean);
        dfs(r, c + 1, heights[r][c], ocean);
        dfs(r, c - 1, heights[r][c], ocean);
    }
    for (let i = 0; i < rows; i++) {
        atlantic.push(new Array(cols).fill(false));
        pacific.push(new Array(cols).fill(false));
    }

    for (let c = 0; c < cols; c++) {
        dfs(0, c, -Infinity, pacific);
        dfs(rows - 1, c, -Infinity, atlantic);
    }
    for (let r = 0; r < rows; r++) {
        dfs(r, 0, -Infinity, pacific);
        dfs(r, cols - 1, -Infinity, atlantic);
    }
    let res = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (atlantic[r][c] && pacific[r][c]) {
                res.push([r, c]);
            }
        }
    }
    return res;
};
