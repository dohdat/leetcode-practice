/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    let memo = new Array(nums.length);
    memo[0] = nums[0];
    memo[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        memo[i] = Math.max(memo[i - 2] + nums[i], memo[i - 1]);
    }
    return memo[nums.length - 1];
};
