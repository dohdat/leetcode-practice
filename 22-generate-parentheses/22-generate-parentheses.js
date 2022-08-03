/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    function backtrack(str, open, close) {
        if (str.length === 2 * n) {
            return res.push(str);
        }
        if (open < n) {
            backtrack(str + '(', open + 1, close);
        }
        if (open > close) {
            backtrack(str + ')', open, close + 1);
        }
    }

    backtrack('(', 1, 0);
    return res;
};
