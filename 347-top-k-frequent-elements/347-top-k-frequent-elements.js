/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let res = [];
    let freqArr = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        let c = nums[i];
        map.set(c, 1 + (map.get(c) || 0));
    }

    let sortedFreq = [...map].sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < k; i++) {
        res.push(sortedFreq[i][0]);
    }

    return res;
};
