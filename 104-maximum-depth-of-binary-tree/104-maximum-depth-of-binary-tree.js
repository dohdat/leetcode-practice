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
    let q = [root];
    let levels = 0;
    while (q.length !== 0) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let c = q.shift();
            c.left && q.push(c.left);
            c.right && q.push(c.right);
        }
        levels++;
    }
    return levels;
};
