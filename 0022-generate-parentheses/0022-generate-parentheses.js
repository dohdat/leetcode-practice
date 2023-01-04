/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  function dfs(str, open, closed) {
    if (open === n && closed === n) {
      res.push(str);
      return;
    }
    if (open < n) {
      dfs(str + "(", open + 1, closed);
    }
    if (closed < open && closed < n) {
      dfs(str + ")", open, closed + 1);
    }
  }
  dfs("", 0, 0);
  return res;
};
// The time complexity of the original code is exponential, specifically O(2^n). This is because the number of recursive calls grows exponentially with the size of the input (n).
// The space complexity of the original code is also exponential, specifically O(n). This is because the maximum depth of the recursive call stack grows with the size of the input (n).