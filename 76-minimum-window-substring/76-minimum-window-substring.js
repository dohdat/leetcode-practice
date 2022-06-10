/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let countT = new Map();
    for (let i = 0; i < t.length; i++) {
        let c = t[i];
        countT.set(c, 1 + (countT.get(c) || 0));
    }
    let window = new Map();
    let have = 0;
    let need = countT.size;
    let left = 0;
    let res = '';
    let resLen = Infinity;
    for (let right = 0; right < s.length; right++) {
        let c = s[right];
        window.set(c, 1 + (window.get(c) || 0));
        if (window.has(c) && window.get(c) === countT.get(c)) {
            have++;
        }
        while (have === need) {
            if (right - left + 1 < resLen) {
                res = s.substring(left, right + 1);
                resLen = res.length;
            }
            window.set(s[left], window.get(s[left]) - 1);
            if (window.get(s[left]) < countT.get(s[left])) {
                have--;
            }
            left++;
        }
    }
    return res;
};
