/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let price = new Array(n).fill(Infinity);
    price[src] = 0;
    for (let i = 0; i < k + 1; i++) {
        let temp = price.slice();
        for (let [from, to, cost] of flights) {
            // we need to start from src
            if (price[from] === Infinity) {
                continue;
            }
            temp[to] = Math.min(temp[to], price[from] + cost);
        }
        price = temp;
    }

    return price[dst] === Infinity ? -1 : price[dst];
};
