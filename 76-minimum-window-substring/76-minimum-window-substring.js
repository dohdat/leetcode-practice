/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let res = '';
    let resLen = Infinity;
    let countT = new Map();
    let window = new Map();
    let have = 0;
    let left = 0;
    for (let i = 0; i < t.length; i++) {
        countT.set(t[i], 1 + (countT.get(t[i]) || 0));
    }
    let need = countT.size;
    for (let right = 0; right < s.length; right++) {
        let c = s[right];
        window.set(c, 1 + (window.get(c) || 0));
        if (countT.has(c) && window.get(c) === countT.get(c)) {
            have++;
        }
        while (have === need) {
            if (right - left + 1 < resLen) {
                res = s.substring(left, right + 1);
                resLen = right - left + 1;
            }
            window.set(s[left], window.get(s[left]) - 1);
            if (countT.has(s[left]) && window.get(s[left]) < countT.get(s[left])) {
                have--;
            }
            left++;
        }
    }
    return res;
};
