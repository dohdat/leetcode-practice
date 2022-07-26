/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let [prevMax, prevMin, res] = [nums[0], nums[0], nums[0]];
    for (let i = 1; i < nums.length; i++) {
        let c = nums[i];
        curMax = Math.max(c * prevMax, c, c * prevMin);
        curMin = Math.min(c * prevMin, c, c * prevMax);
        prevMax = curMax;
        prevMin = curMin;
        res = Math.max(curMax, res);
    }
    return res;
};
