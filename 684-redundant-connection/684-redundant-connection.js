//In undirected graph, use Union Find algo to detect a cycle.
var findRedundantConnection = function(edges) {
    let par = [];
    for (let i = 0; i < edges.length + 1; i++) {
        par.push(i);
    }
    function union(n1, n2) {
        return (par[find(n2)] = find(n1));
    }
    function find(n) {
        if (n === par[n]) {
            return par[n];
        } else {
            return (par[n] = find(par[n]));
        }
    }
    for (let [n1, n2] of edges) {
        if (find(n1) === find(n2)) {
            return [n1, n2];
        } else {
            union(n1, n2);
        }
    }
};
//Time Complexity: O(N) where N is the length of edges
//Space Complexity: O(N) for par and the recursion stack
