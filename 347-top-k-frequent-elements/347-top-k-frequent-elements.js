/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], 1 + (map.get(nums[i]) || 0));
    }
    let sortedFreq = [...map].sort((a, b) => b[1] - a[1]);
    for (let [no, freq] of sortedFreq) {
        if (k > 0) {
            res.push(no);
            k--;
        } else {
            break;
        }
    }
    return res;
};
