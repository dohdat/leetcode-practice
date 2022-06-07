/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let level = 0;
    let q = [root];
    while (q.length !== 0) {
        const len = q.length;
        for (let i = 0; i < len; i++) {
            let node = q.shift();
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        level++;
    }
    return level;
};
