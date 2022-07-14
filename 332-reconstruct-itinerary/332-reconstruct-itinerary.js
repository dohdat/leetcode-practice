/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let preMap = new Map();
    let visited = new Set();
    let res = [];
    for (let [from, to] of tickets) {
        preMap.set(from, (preMap.get(from) || []).concat(to).sort());
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
