/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let preMap = new Map();
  let res = new Set();
  let visited = new Set();
  for (let [crs, pre] of prerequisites) {
    preMap.set(crs, (preMap.get(crs) || []).concat(pre));
  }

  function dfs(node) {
    if (visited.has(node)) return false;
    visited.add(node);
    let visiting = preMap.get(node);
    while (visiting && visiting.length > 0) {
      let c = visiting.shift();
      if (!dfs(c)) return false;
    }
    visited.delete(node);
    res.add(node);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }
  return [...res];
};
