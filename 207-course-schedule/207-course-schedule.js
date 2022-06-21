var canFinish = function(numCourses, prerequisites) {
    let adjList = new Map();
    let visited = new Set();
    for (let i = 0; i < numCourses; i++) {
        adjList.set(i, []);
    }
    prerequisites.forEach(([crs, pre]) => {
        if (adjList.has(crs)) {
            adjList.get(crs).push(pre);
        } else {
            adjList.set(crs, [pre]);
        }
    });
    function dfs(crs) {
        if (visited.has(crs)) return false;
        visited.add(crs);
        for (let i = 0; i < adjList.get(crs).length; i++) {
            let c = adjList.get(crs)[i];
            if (!dfs(c)) return false;
        }
        visited.delete(crs);
        adjList.set(crs, []);
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    return true;
};
