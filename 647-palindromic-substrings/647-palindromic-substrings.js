/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = [];
    let resLen = 0;
    let len = s.length;

    function expand(l, r) {
        while (l >= 0 && r < len && s[l] === s[r]) {
            res.push(s.substring(l, r + 1));
            l--;
            r++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        expand(i, i);
        expand(i, i + 1);
    }
    return res.length;
};
