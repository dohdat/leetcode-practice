var maxProbability = function(n, edges, succProb, start, end) {
    var ret = new Array(n).fill(0);
    ret[start] = 1;
    for (var i = 0; i < n; ++i) {
        for (var j = 0; j < edges.length; ++j) {
            var e = edges[j];
            if (ret[e[1]] < ret[e[0]] * succProb[j]) ret[e[1]] = ret[e[0]] * succProb[j];
            else if (ret[e[0]] < ret[e[1]] * succProb[j]) ret[e[0]] = ret[e[1]] * succProb[j];
        }
    }
    return ret[end];
};
