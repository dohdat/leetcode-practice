/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let preMax = nums[0];
  let preMin = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let n = nums[i];
    let curMax = Math.max(n, n * preMax, n * preMin);
    let curMin = Math.min(n, n * preMax, n * preMin);
    preMax = curMax;
    preMin = curMin;
    res = Math.max(curMax, res);
  }
  return res;
};
