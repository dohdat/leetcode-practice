/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = nums[0];
  let curMax = 0;

  for (let n of nums) {
    if (curMax < 0) {
      curMax = 0;
    }
    curMax += n;
    res = Math.max(res, curMax);
  }
  return res;
};
