/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    let map = new Map();
    let node = head;
    function getNode(n) {
        if (!n) return null;
        if (map.has(n)) return map.get(n);
        let clone = new Node(n.val, null, null);
        map.set(n, clone);
        return clone;
    }

    while (node) {
        let clone = getNode(node);
        clone.next = getNode(node.next);
        clone.random = getNode(node.random);
        node = node.next;
    }
    return map.get(head);
};
