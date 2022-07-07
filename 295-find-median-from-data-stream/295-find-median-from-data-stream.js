var MedianFinder = function() {
    this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    //use binary search to find the position of num of arr, then use splice method to add to arr this.arr.splice(left, 0, num)
    //push into arr if the arr is empty;
    if (this.arr.length === 0) {
        this.arr.push(num);
        return;
    }
    let left = 0;
    let right = this.arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (this.arr[mid] > num) {
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
    let left = 0;
    let right = this.arr.length;
    let mid = Math.floor((left + right) / 2);
    if (this.arr.length % 2 === 0) {
        return (this.arr[mid] + this.arr[mid - 1]) / 2;
    } else {
        return this.arr[mid];
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
