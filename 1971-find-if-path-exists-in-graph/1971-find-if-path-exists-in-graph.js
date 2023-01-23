/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  let res = false;
  let preMap = new Map();
  let visited = new Set();
  for (let [src, dst] of edges) {
    preMap.set(src, (preMap.get(src) || []).concat(dst));
    preMap.set(dst, (preMap.get(dst) || []).concat(src));
  }
  function dfs(node) {
    if (node === destination) {
      res = true;
      return;
    }
    let visiting = preMap.get(node);
    while (visiting && visiting.length > 0) {
      let c = visiting.shift();
      dfs(c);
    }
  }
  dfs(source);
  return res;
};
