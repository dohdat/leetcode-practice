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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let q = [root];
  let res = [];
  while (q.length) {
    let temp = [];
    let len = q.length;
    for (let i = 0; i < len; i++) {
      let c = q.shift();
      temp.push(c.val);
      c.left && q.push(c.left);
      c.right && q.push(c.right);
    }
    res.push(temp);
  }
  return res;
};