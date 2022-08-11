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
    if (!map.has(key)) {
        map.set(key, []);
    }
    map.get(key)[timestamp] = value;
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, target) {
    if (!map.get(key)) return '';
    let cur = map.get(key);
    if (cur[target]) {
        return cur[target];
    }
    while (target > -1) {
        if (cur[target]) {
            return cur[target];
        }
        target--;
    }
    return '';
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
