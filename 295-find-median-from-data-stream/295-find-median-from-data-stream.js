var MedianFinder = function() {
    this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */

MedianFinder.prototype.addNum = function(num) {
    if (this.arr.length === 0) {
        this.arr.push(num);
        return;
    }
    let left = 0;
    let right = this.arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (num < this.arr[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    this.arr.splice(left, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let mid = Math.floor(this.arr.length / 2);

    if (this.arr.length % 2 !== 0) {
        return this.arr[mid];
    } else {
        return (this.arr[mid] + this.arr[mid - 1]) / 2;
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
