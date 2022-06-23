/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let max = nums[0];
    let curSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (curSum < 0) {
            curSum = 0;
        }
        curSum += nums[i];
        max = Math.max(curSum, max);
    }
    return max;
}
