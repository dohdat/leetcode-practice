/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head) return null;
    let tail = head;
    for (let i = 1; i < k; i++) {
        tail = tail.next;
        if (!tail) return head;
    }
    function reverse(cur) {
        let prev = null;
        while (cur) {
            [cur.next, prev, cur] = [prev, cur, cur.next];
        }
        return prev;
    }
    let next = tail.next;
    tail.next = null;
    reverse(head);
    head.next = reverseKGroup(next, k);
    return tail;
};
