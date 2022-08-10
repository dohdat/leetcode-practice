var Logger = function() {
    map = new Map();
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    let prevTime = map.get(message);
    if (typeof prevTime !== undefined && timestamp < prevTime + 10) return false;
    map.set(message, timestamp);
    return true;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
