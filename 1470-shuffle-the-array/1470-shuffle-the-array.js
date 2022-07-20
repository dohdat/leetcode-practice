/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let mid = nums.slice(n, nums.length);
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(nums[i]);
        res.push(mid[i]);
    }
    return res;
};
