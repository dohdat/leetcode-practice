/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    var max = -Infinity;
    function dfs(node) {
        if (!node) return 0;
        var leftSum = dfs(node.left);
        var rightSum = dfs(node.right);
        max = Math.max(max, node.val + leftSum + rightSum);
        return Math.max(0, node.val + leftSum, node.val + rightSum);
    }
    dfs(root);
    return max;
};
