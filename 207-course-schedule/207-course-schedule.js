var canFinish = function(numCourses, prerequisites) {
    let preMap = new Map();
    let visited = new Set();
    //fill the preMap with empty []
    for (let i = 0; i < numCourses; i++) {
        preMap.set(i, []);
    }
    //fill the preMap with crs and its prerequisite
    prerequisites.forEach(([crs, pre]) => {
        if (preMap.has(crs)) {
            preMap.set(crs, [...preMap.get(crs), pre]);
        } else {
            preMap.set(crs, [pre]);
        }
    });

    function dfs(crs) {
        if (visited.has(crs)) {
            return false;
        }

        // if (preMap.get(crs) !== undefined) {
        //     if (preMap.get(crs).length === 0) {
        //         return true;
        //     }
        // }
        visited.add(crs);

        for (let i = 0; i < preMap.get(crs).length; i++) {
            let cur = preMap.get(crs)[i];
            if (!dfs(cur)) return false;
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
