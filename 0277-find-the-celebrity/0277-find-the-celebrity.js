const solution = knows => {
  return n => {
    const indegree = Array.from({ length: n }, () => 0); // n - 1 => everyone except celebrity itslef knows the celebrity
    const outdegree = Array.from({ length: n }, () => 0); // celebrity: 0 => celebrity does not know anyone

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === j) continue; // avoid counting itself
        if (knows(i, j)) {
          outdegree[i]++;
          indegree[j]++;
        }
      }
    }

    // indegree[i] === n - 1: everyone must know celebrity
    // outdegree[i] === 0:  celebrity must know 0 people
    for (let i = 0; i < n; i++) {
      if (indegree[i] === n - 1 && outdegree[i] === 0) return i;
    }

    return -1;
  };
};
