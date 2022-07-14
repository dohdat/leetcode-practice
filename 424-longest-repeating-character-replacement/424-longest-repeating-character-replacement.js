/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let map = new Map();
    let max = 0;
    for (let right = 0; right < s.length; right++) {
        let c = s[right];
        map.set(c, 1 + (map.get(c) || 0));
        let maxFreq = Math.max(...map.values());
        while (right - left + 1 - maxFreq > k) {
            let lc = s[left];
            map.set(lc, map.get(lc) - 1);
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
};
