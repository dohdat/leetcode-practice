/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  while (left < right) {
    let curArea = Math.min(height[right], height[left]) * (right - left);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
    res = Math.max(res, curArea);
  }
  return res;
};
