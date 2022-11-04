/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let prev = 0;
  let res = -Infinity;
  for (let n of nums) {
    prev = Math.max(prev + n, n);
    res = Math.max(res, prev);
  }
  return res;
};
