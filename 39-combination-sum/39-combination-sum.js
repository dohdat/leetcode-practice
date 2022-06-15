/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    function backtrack(i, cur, total) {
        if (total === target) {
            res.push([...cur]);
            return;
        }
        //handle the case where i pointer is out of bounds or if total is > than target
        if (i >= candidates.length || total > target) {
            return;
        }
        cur.push(candidates[i]);
        backtrack(i, cur, total + candidates[i]);
        cur.pop();
        backtrack(i + 1, cur, total);
    }
    backtrack(0, [], 0);
    return res;
};
