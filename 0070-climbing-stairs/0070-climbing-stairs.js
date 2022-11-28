/**
Use a dp

 */
var climbStairs = function(n) {
  let memo = [];
  function dfs(step, end) {
    if (step === end) {
      return 1;
    }
    if (end < step) {
      return 0;
    }
    if (memo[step]) {
      return memo[step];
    }
    memo[step] = dfs(step + 1, end) + dfs(step + 2, end);
    return memo[step];
  }
  return dfs(0, n);
};
