/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let expectedTotal = [...Array(nums.length + 1).keys()].reduce(
    (a, b) => a + b,
    0
  );
  let total = nums.reduce((a, b) => a + b, 0);
  return expectedTotal - total;
};
