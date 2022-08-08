/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let c = nums[i];
    let next = nums[i + 1];
    if (c > next) {
      return i;
    }
  }
  return nums.length - 1;
};
