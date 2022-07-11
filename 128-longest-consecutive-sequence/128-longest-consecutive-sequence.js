/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max = 0;
    let set = new Set(nums);
    for (let i = 0; i < nums.length; i++) {
        let c = nums[i];
        let left = c - 1;
        let counter = 1;
        if (!set.has(left)) {
            while (set.has(c + counter)) {
                counter++;
            }
        }
        max = Math.max(max, counter);
    }
    return max;
};
