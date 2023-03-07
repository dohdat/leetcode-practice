/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let localMin = prices[0];
  let profit = 0;
  let n = prices.length;
  for (let i = 0; i < n; i++) {
    if (prices[i] < localMin) {
      localMin = prices[i];
    } else if (prices[i] - localMin > profit) {
      profit = prices[i] - localMin;
    }
  }
  return profit;
};
