var canFinish = function (numCourses, prerequisites) {
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

  return true;
};
