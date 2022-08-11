var TimeMap = function() {
    map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    let vals = map.get(key) || [];
    vals.push([timestamp, value]);
    map.set(key, vals);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, target) {
    let arr = map.get(key);
    if (!arr) {
        return '';
    }
    let left = 0;
    let right = arr.length - 1;
    let res = '';

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid][0] <= target) {
            res = arr[mid][1];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return res;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
