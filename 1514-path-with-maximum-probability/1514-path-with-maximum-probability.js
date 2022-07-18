var maxProbability = function(n, edges, succProb, start, end) {
    let preMap = new Map();
    let dists = new Array(n).fill(-Infinity);
    for (let i = 0; i < edges.length; i++) {
        let [from, to] = edges[i];
        let cost = succProb[i];
        preMap.set(from, (preMap.get(from) || []).concat([[to, cost]]));
        preMap.set(to, (preMap.get(to) || []).concat([[from, cost]]));
    }

    let maxHeap = new MaxPriorityQueue({ priority: (x) => x[1] });
    maxHeap.enqueue([start, 1]);
    while (!maxHeap.isEmpty()) {
        let [node, p] = maxHeap.dequeue().element;
        if (node === end) return p;
        if (dists[node] > p) continue;
        let visiting = preMap.get(node) || [];

        for (let [nei, cost] of visiting) {
            if (p * cost > dists[nei]) {
                dists[nei] = p * cost;
                maxHeap.enqueue([nei, dists[nei]]);
            }
        }
    }
    return 0;
};
