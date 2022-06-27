/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    let res = [prev];
    for (let i = 0; i < intervals.length; i++) {
        let cur = intervals[i];
        if (cur[0] <= prev[1]) {
            prev[1] = Math.max(cur[1], prev[1]);
        } else {
            res.push(cur);
            prev = cur;
        }
    }
    return res;
};
