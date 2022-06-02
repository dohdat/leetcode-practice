/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    maxArea = Math.max(Math.min(height[l], height[r]) * (r - l), maxArea);
    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
};
