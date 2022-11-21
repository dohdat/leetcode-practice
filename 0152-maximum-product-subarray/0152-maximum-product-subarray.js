/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let prevMax = nums[0];
  let res = nums[0];
  let prevMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let n = nums[i];
    let curMax = Math.max(n * prevMax, n * prevMin, n);
    let curMin = Math.min(n * prevMax, n * prevMin, n);
    prevMax = curMax;
    prevMin = curMin;
    res = Math.max(curMax, res);
  }
  return res;
};
