/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  let cur = new Set();
  function dfs() {
    if (cur.size === nums.length) {
      res.push([...cur]);
      return;
    }

    for (let n of nums) {
      if (cur.has(n)) {
        continue;
      }
      cur.add(n);
      dfs();
      cur.delete(n);
    }
  }
  dfs();
  return res;
};
