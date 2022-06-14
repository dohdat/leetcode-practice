/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let curArea = (right - left) * Math.min(height[right], height[left]);
        maxArea = Math.max(maxArea, curArea ? curArea : 0);
        if (height[right] > height[left]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};
