var allPathsSourceTarget = function(graph) {
    const target = graph.length - 1;

    const res = [];

    function dfs(node, path) {
        path.push(node);

        if (node === target) {
            res.push(path);
            return;
        }

        let visiting = graph[node];
        for (let edge of visiting) {
            dfs(edge, [...path]);
        }
    }

    dfs(0, []);

    return res;
};
