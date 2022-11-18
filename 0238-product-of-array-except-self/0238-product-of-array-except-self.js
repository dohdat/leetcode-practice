/**
 * @param {number[]} nums
 * @return {number[]}
 */
//5-1-1
var productExceptSelf = function(nums) {
  let n = nums.length - 1;
  let res = new Array(n).fill(1);
  let preFix = 1;
  let postFix = 1;
  //calculate prefix
  for (let i = 0; i <= n; i++) {
    res[i] = preFix;
    preFix *= nums[i];
  }
  for (let i = n; i >= 0; i--) {
    res[i] *= postFix;
    postFix *= nums[i];
  }
  //calcualte postfix
  return res;
};
