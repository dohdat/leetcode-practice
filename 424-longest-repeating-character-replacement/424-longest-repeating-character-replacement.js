/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let max = 0;
    let left = 0;
    let charsMap = new Map();
    let maxFreq = 0;
    for (let right = 0; right < s.length; right++) {
        let c = s[right];
        charsMap.set(c, charsMap.get(c) ? charsMap.get(c) + 1 : 1);
        maxFreq = Math.max(...charsMap.values());
        while (right - left + 1 - maxFreq > k) {
            charsMap.set(s[left], charsMap.get(s[left]) - 1);
            left++;
        }
        max = Math.max(right - left + 1, max);
    }
    return max;
};
