/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let res = 0;
  let product;
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    product = nums[i];
    while (j <= nums.length) {
      if (product < k) {
        res++;
      }
      if (product >= k) {
        break;
      }
      product *= nums[j];
      j++;
    }
  }
  return res;
};
