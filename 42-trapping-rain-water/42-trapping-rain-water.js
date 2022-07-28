/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let res = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(height[left], leftMax);
            res += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(height[right], rightMax);
            res += rightMax - height[right];
            right--;
        }
    }
    return res;
};

//Time Complexity: O(n)
//Space: O(1)
