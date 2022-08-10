var HitCounter = function() {
    hitMap = new Map();
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    if (hitMap.has(timestamp)) {
        hitMap.set(timestamp, hitMap.get(timestamp) + 1);
    } else {
        hitMap.set(timestamp, 1);
    }
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    let laststamp = timestamp >= 300 ? timestamp - 300 : 0;
    let count = 0;
    while (timestamp > laststamp) {
        if (hitMap.has(timestamp)) {
            count += hitMap.get(timestamp);
        }
        timestamp--;
    }
    return count;
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
