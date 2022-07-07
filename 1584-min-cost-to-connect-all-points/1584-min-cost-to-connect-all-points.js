/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    //set result cost to 0
    let cost = 0;
    let n = points.length;
    //set all distances to Infinity
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
                // step 2: calculate all distances to the selected point
                dist[j] = Math.min(dist[j], Math.abs(x1 - x2) + Math.abs(y1 - y2));
                if (dist[j] < min) {
                    //choose the point with the minimal distance
                    min = dist[j];
                    point = j;
                }
            }
        }
        //add the distance to the cost
        cost += min;
        //exclude the point from next searches and make it selected
        dist[point] = 0;
        //if all points connected, return the result, else go to step 2.
        next = point;
    }
    return cost;
};
