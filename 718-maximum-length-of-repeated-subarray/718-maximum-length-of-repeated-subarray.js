/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let dp = new Array(n + 1).fill(0); //1-d dp array
  let max = 0;
  for (let i = 1; i <= m; i++) {
    let prev = dp.slice();
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[j] = 1 + prev[j - 1];
        max = Math.max(max, dp[j]);
      } else {
        dp[j] = 0;
      }
    }
  }
  return max;
};
