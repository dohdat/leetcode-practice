/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  let trustCounts = new Array(n + 1).fill(0);
  for (let [a, b] of trust) {
    trustCounts[a]--;
    trustCounts[b]++;
  }
  for (let i = 1; i < trustCounts.length; i++) {
    if (trustCounts[i] === n - 1) {
      return i;
    }
  }
  return -1;
};
