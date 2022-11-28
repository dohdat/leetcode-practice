/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let res = [0];
  for (let i = 1; i <= n; i++) {
    res[i] = res[i & i - 1] + 1;
  }
  return res;
};
