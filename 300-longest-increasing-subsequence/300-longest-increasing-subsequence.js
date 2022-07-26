/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Map();
    let lis = 1;
    let len = nums.length;

    function dfs(idx) {
        if (dp.has(idx)) return dp.get(idx);
        let max = 1;
        for (let i = idx + 1; i < len; i++) {
            let sub = 1;
            if (nums[idx] < nums[i]) {
                sub += dfs(i);
            }
            max = Math.max(sub, max);
        }
        dp.set(idx, max);
        return dp.get(idx);
    }

    for (let i = 0; i < len; i++) {
        let res = dfs(i);
        lis = Math.max(res, lis);
    }
    return lis;
};
