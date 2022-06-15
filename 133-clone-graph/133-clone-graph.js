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
    if (node === null) {
        return null;
    }
    const hash = new Map();
    function clone(root) {
        // If our graph hasn't already copied the input node
        if (!hash.has(root.val)) {
            // Create new copy node (+ reference in map)
            hash.set(root.val, new Node(root.val));
            // Recursively clone neighbors
            hash.get(root.val).neighbors = root.neighbors.map((nei) => clone(nei));
        }
        return hash.get(root.val);
    }
    return clone(node);
};
