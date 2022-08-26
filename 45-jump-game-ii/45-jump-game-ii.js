/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let [res, curEnd, farthest] = [0, 0, 0];
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === curEnd) {
      res++;
      curEnd = farthest;
    }
  }
  return res;
};
