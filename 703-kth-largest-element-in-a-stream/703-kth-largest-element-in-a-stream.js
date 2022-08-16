/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.main = new MinPriorityQueue();
    for (let i = 0; i < nums.length; i++) {
        this.main.enqueue(nums[i]);
    }
    this.k = k;
    while (this.main.size() > k) {
        this.main.dequeue().element;
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.main.enqueue(val);
    if (this.main.size() > this.k) {
        this.main.dequeue().element;
    }
    return this.main.front().element;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
