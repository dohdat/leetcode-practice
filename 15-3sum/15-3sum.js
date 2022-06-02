/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  let res = [];
  let sortedArr = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    } else {
      let left = i + 1;
      let right = sortedArr.length - 1;
      while (left < right) {
        let target = nums[i] + nums[left] + nums[right];
        if (target === 0) {
          res.push([nums[i], nums[left], nums[right]]);
          left++;
          while (nums[left] === nums[left - 1] && left < right) {
            left++;
          }
        } else if (target > 0) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return res;
};
