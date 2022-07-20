/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    //1st case: robbing the first house
    let dp = [nums[0], Math.max(nums[0], nums[1])];
    //2nd case: robbing the last house
    let dp2 = [0, nums[1]];

    for (let i = 2; i < n; i++) {
        if (i === n - 1) {
            dp[i] = dp[i - 1];
        } else {
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
        }

        dp2[i] = Math.max(dp2[i - 2] + nums[i], dp2[i - 1]);
    }

    return Math.max(dp[n - 1], dp2[n - 1]);
};
