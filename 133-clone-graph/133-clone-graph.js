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
    let hash = new Map();
    function clone(root) {
        if (!hash.get(root.val)) {
            hash.set(root.val, new Node(root.val));
            hash.get(root.val).neighbors = root.neighbors.map((i) => clone(i));
        }
        return hash.get(root.val);
    }
    return clone(node);
};
