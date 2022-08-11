/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    const map = new Map();
    for (let [id, time] of logs) {
        map.set(id, (map.get(id) || new Set()).add(time));
    }

    let count = new Array(k).fill(0);
    for (let [key, val] of map) {
        count[val.size - 1]++;
    }
    return count;
};
