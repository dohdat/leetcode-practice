/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let time = new Array(n + 1).fill(Infinity);
    time[src] = 0;
    for (let i = 0; i <= k; i++) {
        let temp = time.slice();
        for (let [from, to, cost] of flights) {
            if (time[from] === Infinity) continue;
            temp[to] = Math.min(temp[to], time[from] + cost);
        }
        time = temp;
    }
    return time[dst] === Infinity ? -1 : time[dst];
};
