var findOrder = function(numCourses, prerequisites) {
    
    // Create the graph from array.
    const graph = new Map();
    const visitedSet = new Set();
    
    // This is for numCourses 3, prerequisites [] 
    // or numCourses 3, prerequisites [0, 1]
    for (let i = 0; i < numCourses; i++) {
          graph.set(i, []);
    }
    
    for (let [n, e] of prerequisites) {
        let edges = graph.get(n) || [];
        edges.push(e);
        graph.set(n, edges);
    }
    
    
    const orderList = new Set();
    // dfs each node. Why? Because [0, 1] [2, 1] 
    for (let key of graph.keys()) {
        if (!dfs(key)) return [];
    }
    
    return [...orderList];

    function dfs(n) {
        
        // It the same node called itself down the line.
        if (visitedSet.has(n)) return false; 
        
        // If dfs already done sucessfully it should be empty.
        const edges = graph.get(n);
        if (!edges) { 
            if (!orderList.has(n)){
                orderList.add(n)
            };
            return true;
        }; 
        
        visitedSet.add(n);
        
        // dfs its childrens = edges = descendants. 
        for (let node of edges) {
            // If false it is impossible to finish all courses.
            // Kill it now.
            if (!dfs(node)) return false;
        }
        if (!orderList.has(n)){
            orderList.add(n)
        };
        graph.set(n, []);    
        visitedSet.delete(n);
        return true; 
    }
    
};