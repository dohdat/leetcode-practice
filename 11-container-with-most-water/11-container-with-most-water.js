/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left <= right) {
        let curArea = Math.min(height[left], height[right]) * (right - left);
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
        max = Math.max(curArea, max);
    }
    return max;
};
