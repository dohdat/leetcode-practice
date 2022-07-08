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
    for (let [a, b] of edges)
        if (find(a) === find(b)) return [a, b];
        else union(a, b);
};
