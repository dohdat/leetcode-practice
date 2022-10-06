/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  let cur = head;
  let pointer = head;
  let res = [];
  while (cur.next) {
    pointer = pointer.next;
    if (pointer.val > cur.val) {
      res.push(pointer.val);
      cur = cur.next;
      pointer = cur;
    } else if (pointer.next === null) {
      res.push(0);
      cur = cur.next;
      pointer = cur;
    }
  }
  res.push(0);
  return res;
};
