/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let pattern = '';
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        pattern += s[i];
        let times = s.length / pattern.length;
        let repeated = '';
        while (times > 0) {
            repeated += pattern;
            times--;
        }
        if (repeated === s) {
            return true;
        }
    }
    return false;
};
