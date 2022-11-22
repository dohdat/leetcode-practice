/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let res = nums[0];
  while (left <= right) {
    if (nums[left] <= nums[right]) {
      res = Math.min(res, nums[left]);
      return res;
    }
    let mid = Math.floor((left + right) / 2);
    res = Math.min(res, nums[mid]);
    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
};

/**
Q) Why do we check nums[left] <= nums[right] before checking between nums[left] and res?
A) This is a case, where everything is already sorted, no rotation, then we can just compare between res and left most values in nums
Q) Why do we check res = Math.min(res, nums[mid])?
A) Because we need to update res with min between res or mid value
Q) What does this mean if nums[mid] >= nums[left] then left = mid+1?
A) To determine if we are going to search to the left or right. If it's sorted on the left portion, search right portion
Q) Time complexity?
A) O(log n): binary search
Q) Space Complexity?
A) O(1) not using not extra spaces
*/
