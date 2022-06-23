/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let max = nums[0];
    let cur = 0;
    for (let i = 0; i < nums.length; i++) {
        if (cur < 0) cur = 0;
        cur += nums[i];
        max = Math.max(max, cur);
    }
    return max;
}
