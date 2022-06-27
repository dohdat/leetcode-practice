/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    let res = [prev];
    for (let i = 0; i < intervals.length; i++) {
        let c = intervals[i];
        if (c[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], c[1]);
        } else {
            res.push(c);
            prev = c;
        }
    }
    return res;
};
