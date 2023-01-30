var possibleBipartition = function(n, dislikes) {
  // Time complexity: O(n + m) where n is the number of nodes and m is the number of edges.
  // Space complexity: O(n + m)

  let graph = new Map();
  // Initialize the graph with an empty array for each node.
  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }
  // Add edges to the graph.
  for (let dislike of dislikes) {
    graph.get(dislike[0]).push(dislike[1]);
    graph.get(dislike[1]).push(dislike[0]);
  }

  let colors = new Map();
  // Initialize the color map with 0 for each node.
  for (let i = 1; i <= n; i++) {
    colors.set(i, 0);
  }

  for (let i = 1; i <= n; i++) {
    // If the node has not been colored, attempt to color it with color 1.
    // If coloring fails, return false.
    if (colors.get(i) === 0 && !dfs(i, 1)) {
      return false;
    }
  }

  function dfs(node, color) {
    // If the node has already been colored, return whether its color is the same as the expected color.
    if (colors.get(node) !== 0) {
      return colors.get(node) === color;
    }
    colors.set(node, color);
    // Visit all neighbors of the node and color them with the opposite color.
    // If coloring any of the neighbors fails, return false.
    for (let neighbor of graph.get(node)) {
      if (!dfs(neighbor, -color)) {
        return false;
      }
    }
    return true;
  }

  // If all nodes have been successfully colored, return true.
  return true;
};
