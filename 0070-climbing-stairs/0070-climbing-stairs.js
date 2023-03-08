function climbStairs(n) {
  // Initialize an array to store the number of ways to reach each stair.
  // We start with 1 way to reach the first stair (if n = 0, there are 0 stairs to climb).
  const dp = [1, 1];

  // Iterate from the second stair up to n, and calculate the number of ways to reach each stair.
  for (let i = 2; i <= n; i++) {
    // The number of ways to reach the i-th stair is equal to the sum of the number of ways to reach the (i-1)th stair and the (i-2)th stair.
    // This is because you can either climb 1 stair from the (i-1)th stair, or 2 stairs from the (i-2)th stair.
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
