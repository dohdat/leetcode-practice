/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let map = new Map();
    let have = 3;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            map.set(s[i], 1 + (map.get(s[i]) || 0));
        }
        if (s[i] === 'L') {
            have--;
        } else {
            have = 3;
        }
        if (have === 0) return false;
    }

    if (map.get('A') >= 2 || have <= 0) {
        return false;
    } else {
        return true;
    }
};
