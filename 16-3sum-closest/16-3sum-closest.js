/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i < nums.length - 1; i++) {
    // let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let cur = nums[i] + nums[left] + nums[right];
      if (Math.abs(cur - target) < Math.abs(min - target)) min = cur;
      if (cur === target) {
        return target;
      }
      if (cur > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return min;
};
