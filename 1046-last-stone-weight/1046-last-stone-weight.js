/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const q = new MaxPriorityQueue();
    for (let s of stones) {
        q.enqueue(s);
    }
    while (q.size() > 1) {
        let first = q.dequeue().element;
        let second = q.dequeue().element;
        if (first !== second) {
            q.enqueue(first - second);
        }
    }
    return q.size() === 0 ? 0 : q.front().element;
};
