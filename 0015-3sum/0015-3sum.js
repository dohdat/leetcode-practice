/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let target = nums[left] + nums[right] + nums[i];
      if (target === 0) {
        let targetStr = [nums[left], nums[right], nums[i]].toString();
        if (!set.has(targetStr)) {
          set.add(targetStr);
          res.push([nums[left], nums[right], nums[i]]);
        } else {
          left++;
          right--;
        }
      } else if (target < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};
