/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let res = [];
    let preMap = new Map();
    for (let [src, dst] of tickets) {
        preMap.set(src, (preMap.get(src) || []).concat(dst).sort());
    }

    function dfs(node) {
        let visiting = preMap.get(node);
        while (visiting && visiting.length > 0) {
            let c = visiting.shift();
            dfs(c);
        }
        res.push(node);
    }
    dfs('JFK');
    return res.reverse();
};
