/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let memo = new Map();
  function dfs(left) {
    if (memo.has(left)) {
      return memo.get(left);
    }
    if (left === 0) return 0;
    let min = Infinity;
    for (let coin of coins) {
      if (left - coin >= 0) {
        min = Math.min(min, dfs(left - coin));
      }
    }
    memo.set(left, min + 1);
    return min + 1;
  }
  let res = dfs(amount);
  return res === Infinity ? -1 : res;
};
