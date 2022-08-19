/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
    function checkPalindrome(str) {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
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
