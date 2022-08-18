/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort();
    let res = [];
    function backtrack(idx, path) {
        if (idx > nums.length) {
            return;
        }
        res.push([...path]); 
        for (let i = idx; i < nums.length; i++) {
            if (i > idx && nums[i] === nums[i - 1]) {
                continue;
            }
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    backtrack(0, []);
    return res;
};
