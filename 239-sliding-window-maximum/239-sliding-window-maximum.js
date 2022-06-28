/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let res = [];
  let q = [];
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    while (q.length && nums[q[q.length - 1]] < nums[right]) {
      q.pop();
    }
    q.push(right);
    if (left > q[0]) {
      q.shift();
    }
    if (right + 1 >= k) {
      res.push(nums[q[0]]);
      left++;
    }
    right++;
  }
  return res;
};
