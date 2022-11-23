/**
Q) Explain the general approach?
Use a 2 pointers technique, left and right. Shift smaller pointer value over to keep max value.
Q) What technique to shift pointers? and why?
Shift smaller pointer value over.
Q) Time complexity?
O(n) where n is the height length
Q) Space complexity?
O(1)
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left <= right) {
    let curArea = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, curArea);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
