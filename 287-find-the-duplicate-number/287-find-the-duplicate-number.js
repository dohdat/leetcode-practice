/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = new Map();
    for (let i of nums) {
        map.set(i, (map.get(i) || 0) + 1);
    }
    for (let [key, val] of map) {
        if (val > 1) {
            return key;
        }
    }
};
