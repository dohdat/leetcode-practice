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
var sumNumbers = function(root) {
  let res = [];
  function dfs(node, path) {
    if (!node) {
      return false;
    }
    path.push(node.val);
    if (!node.left && !node.right) {
      res.push(Number(path.join("")));
      return true;
    }
    node.left && dfs(node.left, [...path]);
    node.right && dfs(node.right, [...path]);
  }
  dfs(root, []);
  let answer = res.reduce((a, b) => a + b);
  return answer;
};
