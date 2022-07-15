//Fast and slow pointers algo
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
