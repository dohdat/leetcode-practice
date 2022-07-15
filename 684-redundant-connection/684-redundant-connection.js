/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    //undirected graph, use union find to detect cycle
    let parent = [];

    let rank = new Array(edges.length + 1).fill(1);
    for (let i = 0; i < edges.length + 1; i++) {
        parent.push(i);
    }
    //function to find the parent of n
    function find(n) {
        let p = parent[n];
        while (p !== parent[p]) {
            p = parent[p];
        }
        return p;
    }

    //function to union the 2 nodes
    function union(n1, n2) {
        let p1 = find(n1);
        let p2 = find(n2);
        //if both parents are equal,
        if (p1 === p2) {
            return false;
        }
        //update ranking
        if (rank[p1] > rank[p2]) {
            parent[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            parent[p1] = p2;
            rank[p2] += rank[p1];
        }
        return true;
    }
    for (let [n1, n2] of edges) {
        if (!union(n1, n2)) {
            return [n1, n2];
        }
    }

    return [];
};
