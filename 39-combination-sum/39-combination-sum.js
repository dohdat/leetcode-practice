/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    function backtrack(i, path, total) {
        if (total === target) {
            res.push([...path]);
            return;
        }
        if (total > target || i >= candidates.length) {
            return;
        }
        //1st case: track if we can use this el 
        path.push(candidates[i]);
        backtrack(i, path, total + candidates[i]);
        path.pop();
        //2nd case: track if we cannot use this el
        backtrack(i + 1, path, total);
    }

    backtrack(0, [], 0);
    return res;
};
