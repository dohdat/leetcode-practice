/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const time = [];
    for (let i = 0; i <= n; i++) {
        time.push(Infinity);
    }
    time[k] = 0;
    for (let i = 0; i < n; i++) {
        for (let [u, v, w] of times) {
            if (time[u] === Infinity) continue;
            if (time[v] > time[u] + w) {
                time[v] = time[u] + w;
            }
        }
    }
    let res = 0;

    for (let i = 1; i <= n; i++) {
        res = Math.max(res, time[i]);
    }
    return res === Infinity ? -1 : res;
};
