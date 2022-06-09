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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let s = [root];
    let res = [];
    while (s.length > 0) {
        let c = s.pop();
        res.push(c.val);
        c.left && s.push(c.left);
        c.right && s.push(c.right);
    }
    return res.sort((a, b) => a - b)[k-1];
};
