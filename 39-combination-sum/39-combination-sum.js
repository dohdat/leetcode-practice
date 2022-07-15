/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    function backtrack(i, path, curSum) {
        if (curSum === target) {
            res.push(path.slice());
            return;
        }
        if (i >= candidates.length || curSum > target) {
            return;
        }
        path.push(candidates[i]);
        backtrack(i, path, curSum + candidates[i]);
        path.pop();
        backtrack(i + 1, path, curSum);
    }
    backtrack(0, [], 0);
    return res;
};
