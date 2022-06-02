/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let max = 0;
  let numSet = new Set([...nums]);
  for (let i = 0; i < nums.length; i++) {
    let c = nums[i];
    let left = nums[i] - 1;
    let curMax = 0;
    if (!numSet.has(left)) {
      while (numSet.has(c + curMax)) {
        curMax++;
      }
    }
    max = Math.max(max, curMax);
  }
  return max;
};
