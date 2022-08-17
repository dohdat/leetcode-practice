/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let q = new MaxPriorityQueue();
    let res = 0;
    for (let n of nums) {
        q.enqueue(n);
    }
    for (let i = 0; i < k - 1; i++) {
        q.dequeue().element;
    }
    res = q.front().element;
    return res;
};
