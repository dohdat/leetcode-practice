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
