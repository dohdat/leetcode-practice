/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0];
    let res = 0;
    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i];
        if (cur[0] < prev[1]) {
            res++;
        } else {
            prev = cur;
        }
    }
    return res;
};
