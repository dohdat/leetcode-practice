/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    //check if left side is sorted
    if (nums[left] <= nums[mid]) {
      //if smallest <= target <= biggest
      if (nums[left] <= target && target <= nums[mid]) {
        //target is in the left side
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      //otherwise, right side is sorted
      //if smallest <= target <= biggest
      if (nums[mid] <= target && target <= nums[right]) {
        //target is in the right
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
