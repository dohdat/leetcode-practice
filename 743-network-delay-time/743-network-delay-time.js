/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let time = new Array(n + 1).fill(Infinity);
    time[k] = 0;
    for (let i = 0; i <= n; i++) {
        let temp = time.slice();
        for (let [from, to, cost] of times) {
            if (time[from] === Infinity) continue;
            temp[to] = Math.min(temp[to], time[from] + cost);
        }
        time = temp;
    }
    time.shift();
    let res = Math.max(...time);
    return res === Infinity ? -1 : res;
};
