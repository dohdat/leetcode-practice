/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let res = 0;
  let [left, right] = [0, 0];
  while (right < nums.length - 1) {
    let farthest = 0;
    for (let i = left; i < right + 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);
    }
    left = right + 1;
    right = farthest;
    res += 1;
  }
  return res;
};
