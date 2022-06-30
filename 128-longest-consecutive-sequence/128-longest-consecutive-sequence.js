/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max = 0;
    let numSet = new Set([...nums]);
    for (let i = 0; i < nums.length; i++) {
        let c = nums[i];
        let counter = 1;
        if (!numSet.has(c - 1)) {
            while (numSet.has(c + counter)) {
                counter++;
            }
        }
        max = Math.max(max, counter);
    }
    return max;
};
