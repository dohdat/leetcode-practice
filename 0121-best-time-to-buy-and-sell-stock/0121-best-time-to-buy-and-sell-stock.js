/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let minVal = Infinity;
  for (let p of prices) {
    if (p < minVal) {
      minVal = p;
    } else if (p - minVal > profit) {
      profit = p - minVal;
    }
  }
  return profit;
};
