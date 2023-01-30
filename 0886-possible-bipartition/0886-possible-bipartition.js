var possibleBipartition = function(n, dislikes) {
  let graph = Array(n + 1).fill(0).map(() => []);
  for (let dislike of dislikes) {
    graph[dislike[0]].push(dislike[1]);
    graph[dislike[1]].push(dislike[0]);
  }

  let colors = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    if (colors[i] === 0 && !dfs(i, 1)) {
      return false;
    }
  }

  function dfs(node, color) {
    if (colors[node] !== 0) {
      return colors[node] === color;
    }
    colors[node] = color;
    for (let neighbor of graph[node]) {
      if (!dfs(neighbor, -color)) {
        return false;
      }
    }
    return true;
  }

  return true;
};
