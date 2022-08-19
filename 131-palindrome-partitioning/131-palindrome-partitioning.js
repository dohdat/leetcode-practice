/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
    function checkPalindrome(str) {
        let reversed = str
            .split('')
            .reverse()
            .join('');
        return reversed === str;
    }
    function backtrack(idx, path) {
        if (idx >= s.length) {
            res.push([...path]);
            return;
        }
        for (let i = idx; i < s.length; i++) {
            let cur = s.substring(idx, i + 1);
            if (checkPalindrome(cur)) {
                path.push(cur);
                backtrack(i + 1, path);
                path.pop();
            }
        }
    }
    backtrack(0, []);
    return res;
};
