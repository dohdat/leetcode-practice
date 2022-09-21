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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  let q = [root];
  let res = [];
  while (q.length !== 0) {
    let cur = null;
    let len = q.length;
    for (let i = 0; i < len; i++) {
      let c = q.shift();
      if (i === len - 1) {
        cur = c.val;
      }
      c.left && q.push(c.left);
      c.right && q.push(c.right);
    }
    res.push(cur);
  }

  return res;
};
