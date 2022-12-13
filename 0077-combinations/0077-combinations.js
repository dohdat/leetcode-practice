/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];
  let cur = new Set();
  function backtrack(index) {
    if (cur.size === k) {
      res.push([...cur]);
      return;
    }
    for (let i = index; i <= n; i++) {
      if (cur.has(i)) {
        continue;
      }
      cur.add(i);
      backtrack(i + 1);
      cur.delete(i);
    }
  }
  backtrack(1);
  return res;
};
