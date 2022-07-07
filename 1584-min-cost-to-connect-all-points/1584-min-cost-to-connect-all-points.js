/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let cost = 0;
    let n = points.length;
    let dist = new Array(n).fill(Infinity);
    dist[0] = 0;
    let next = 0;
    for (let i = 1; i < n; i++) {
        let min = Infinity;
        let point = -1;
        for (let j = 1; j < n; j++) {
            let [x1, y1] = points[j];
            let [x2, y2] = points[next];
            if (dist[j] > 0) {
                dist[j] = Math.min(dist[j], Math.abs(x1 - x2) + Math.abs(y1 - y2));
                if (dist[j] < min) {
                    min = dist[j];
                    point = j;
                }
            }
        }
        cost += min;
        dist[point] = 0;
        next = point;
    }
    return cost;
};
