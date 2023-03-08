/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (!node) return null;
  const map = new Map();

  function clone(node) {
    if (map.has(node)) {
      return map.get(node);
    }

    const newNode = new Node(node.val, []);
    map.set(node, newNode);
    for (let neighbor of node.neighbors) {
      newNode.neighbors.push(clone(neighbor));
    }
    return newNode;
  }
  return clone(node);
};
