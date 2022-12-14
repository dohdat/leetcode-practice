/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let res = [-1, -1];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      let found = mid;
      res[1] = mid;
      while (nums[found] === target) {
        found -= 1;
      }
      res[0] = found + 1;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return res;
};
