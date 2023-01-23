var validPath = function(n, edges, source, destination) {
  let preMap = new Map();
  let visited = new Set();
  let queue = [];

  // Create an adjacency list to store the edges
  for (let [src, dst] of edges) {
    if (!preMap.has(src)) preMap.set(src, []);
    if (!preMap.has(dst)) preMap.set(dst, []);
    preMap.get(src).push(dst);
    preMap.get(dst).push(src);
  }

  // BFS function for traversing the graph
  function bfs(node) {
    if (node === destination) {
      return true;
    }
    if (visited.has(node)) return false;
    visited.add(node);
    for (let next of preMap.get(node)) {
      queue.push(next);
    }
    while (queue.length) {
      let c = queue.shift();
      if (bfs(c)) {
        return true;
      }
    }
    return false;
  }

  return bfs(source);
};
