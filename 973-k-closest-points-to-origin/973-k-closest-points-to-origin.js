/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let q = new MinPriorityQueue({ priority: (x) => x[0] });
    let res = [];
    function calculateDis([a, b]) {
        return a * a + b * b;
    }
    for (let p of points) {
        q.enqueue([calculateDis(p), p]);
    }
    for (let i = 0; i < k; i++) {
        let c = q.dequeue().element;
        res.push(c[1]);
    }
    return res;
};
