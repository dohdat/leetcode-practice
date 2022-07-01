/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Infinity;
    function dfs(node) {
        if (!node) return 0;
        let leftSum = dfs(node.left);
        let rightSum = dfs(node.right);
        max = Math.max(max, node.val + leftSum + rightSum);
        return Math.max(0, node.val + leftSum, node.val + rightSum);
    }
    dfs(root);
    return max;
};
