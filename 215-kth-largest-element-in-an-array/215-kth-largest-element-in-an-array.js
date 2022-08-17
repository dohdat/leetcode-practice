/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let q = new MinPriorityQueue();
    let res = 0;
    for (let n of nums) {
        q.enqueue(n);
        if (q.size() > k) {
            q.dequeue().element;
        }
    }

    res = q.front().element;
    return res;
};
