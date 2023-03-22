/*
 * @lc app=leetcode id=1462 lang=javascript
 *
 * [1462] Course Schedule IV
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  let preMap = new Map();
  let visited = new Set();

  for (let [crs, dst] of prerequisites) {
    preMap.set(crs, (preMap.get(crs) || []).concat(dst));
  }

  function dfs(node) {
    if (visited.has(node)) {
      return false;
    }
    visited.add(node);
    let visiting = preMap.get(node);
    while (visiting && visiting.length) {
      let cur = visiting.shift();
      if (!dfs(cur)) {
        return false;
      }
    }
    visited.delete(node);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }
};
// @lc code=end
