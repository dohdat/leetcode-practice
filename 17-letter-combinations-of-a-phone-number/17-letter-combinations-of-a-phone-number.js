/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    let res = [];

    function backtrack(idx, cur) {
        if (cur.length === digits.length) {
            res.push(cur);
            return;
        }
        for (let c of map[digits[idx]]) {
            backtrack(idx + 1, cur + c);
        }
    }
    if (digits) {
        backtrack(0, '');
    }
    return res;
};
