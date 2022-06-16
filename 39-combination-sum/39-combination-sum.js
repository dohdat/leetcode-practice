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
        if (i >= candidates.length || total > target) {
            return;
        }
        //first case: includes the candidates[i]
        //important do not increase i index
        cur.push(candidates[i]);
        backtrack(i, cur, total + candidates[i]);
        cur.pop();
        //second case: do not includes candidates[i], but we increase the i index
        backtrack(i + 1, cur, total);
    }

    backtrack(0, [], 0);
    return res;
};
