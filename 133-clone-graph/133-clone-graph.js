var cloneGraph = function(node) {
    if (!node) return null;
    let map = new Map();
    function clone(cur) {
        if (!map.has(cur.val)) {
            map.set(cur.val, new Node(cur.val));
            map.get(cur.val).neighbors = cur.neighbors.map((nei) => clone(nei));
        }
        return map.get(cur.val);
    }
    return clone(node);
};