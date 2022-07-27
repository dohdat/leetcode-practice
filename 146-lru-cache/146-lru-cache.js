var LRUCache = function(capacity) {
    this.cache = new Map();
    this.size = 0;
    this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        let val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return this.cache.get(key);
    } else return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        if (this.cache.size <= 1) this.cache.set(key, value);
        else {
            this.cache.delete(key);
            this.cache.set(key, value);
            return;
        }
    }

    if (this.size === this.capacity) {
        const [firstKey] = this.cache.keys();
        this.cache.delete(firstKey);
        this.cache.set(key, value);
    } else {
        this.cache.set(key, value);
        this.size++;
    }
};
