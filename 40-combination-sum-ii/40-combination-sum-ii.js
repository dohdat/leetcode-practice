/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(nums, target) {
    if (!nums || nums.length == 0) return [];
    nums.sort((a, b) => a - b);
    let res = [];
    function backtrack(idx, path, total) {
        if (idx > nums.length || total > target) {
            return;
        }

        if (total === target) {
            res.push([...path]);
        }

        for (let i = idx; i < nums.length; i++) {
            if (i > idx && nums[i] === nums[i - 1]) {
                continue;
            }

            path.push(nums[i]);
            backtrack(i + 1, path, total + nums[i]);
            path.pop();
        }
    }
    backtrack(0, [], 0);
    return res;
};
