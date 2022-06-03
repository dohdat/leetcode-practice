/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  let max = 1;
  let left = 0;
  let visited = new Set();
  for (let right = 0; right < s.length; right++) {
    while (visited.has(s[right])) {
      visited.delete(s[left]);
      left++;
    }
    visited.add(s[right]);
    max = Math.max(right - left + 1, max);
  }
  return max;
};
