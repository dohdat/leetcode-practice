var canFinish = function(numCourses, prerequisites) {
    let preMap = new Map();
    let visited = new Set();
    //     create an adj List
    for (let i = 0; i < numCourses; i++) {
        preMap.set(i, []);
    }
    prerequisites.forEach(([crs, pre]) => {
        if (preMap.has(crs)) {
            preMap.set(crs, [...preMap.get(crs), pre]);
        } else {
            preMap.set(crs, [pre]);
        }
    });
    function dfs(crs) {
        if (visited.has(crs)) return false;
        visited.add(crs);
        for (let i = 0; i < preMap.get(crs).length; i++) {
            let c = preMap.get(crs)[i];
            if (!dfs(c)) return false;
        }
        visited.delete(crs);
        preMap.set(crs, []);
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    return true;
};
