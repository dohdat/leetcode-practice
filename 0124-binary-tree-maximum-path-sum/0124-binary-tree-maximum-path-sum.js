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
var maxPathSum = function(root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    const leftSum = Math.max(dfs(node.left), 0);
    const rightSum = Math.max(dfs(node.right), 0);

    const curSum = node.val + leftSum + rightSum;
    maxSum = Math.max(curSum, maxSum);
    return node.val + Math.max(leftSum, rightSum);
  }
  dfs(root);
  return maxSum;
};
