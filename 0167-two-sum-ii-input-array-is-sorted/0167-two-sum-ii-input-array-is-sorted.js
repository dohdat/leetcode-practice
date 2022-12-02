/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let res = [];
  let n = nums.length;
  let newSet = new Set();
  for (let i = 0; i < n; i++) {
    let missing = target - nums[i];
    if (!newSet.has(missing) && nums.includes(missing)) {
      return [i + 1, nums.indexOf(missing, i + 1) + 1];
    } else {
      newSet.add(missing);
    }
  }
};
