/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists || !lists.length) return null;
  let arr = [];
  let res = new ListNode(-1);

  for (let cur of lists) {
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
  }
  let cur = res;
  arr.sort((a, b) => a - b);
  for (let n of arr) {
    let temp = new ListNode(n);
    cur.next = temp;
    cur = cur.next;
  }
  return res.next;
};
