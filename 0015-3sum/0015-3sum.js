/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let numSet = new Set();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length;
    while (left < right) {
      let target = nums[i] + nums[left] + nums[right];
      if (target === 0) {
        let resStr = [nums[i], nums[left], nums[right]].toString();
        if (!numSet.has(resStr)) {
          res.push([nums[i], nums[left], nums[right]]);
          numSet.add(resStr);
        }
        left++;
        right--;
      } else if (target < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};
