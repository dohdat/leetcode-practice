/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  let preMap = new Map();
  let res = new Set();
  let visited = new Set();
  for (let [src, dest] of paths) {
    preMap.set(src, (preMap.get(src) || []).concat(dest));
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
  for (let [src, dst] of paths) {
    if (!dfs(src)) return [];
  }
  return [...res][0];
};
