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
    let res = 0;
    function dfs(node) {
        if (!node) return false;
        node.left && dfs(node.left);
        if (k === 1) {
            res = node.val;
        }
        k--;
        node.right && dfs(node.right);
    }
    dfs(root);
    return res;
};
