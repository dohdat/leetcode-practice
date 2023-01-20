function findSubsequences(nums) {
  let res = new Set();
  let backtrack = function(start, path) {
    if (path.length >= 2) {
      res.add(JSON.stringify(path));
    }
    for (let i = start; i < nums.length; i++) {
      if (!path.length || nums[i] >= path[path.length - 1]) {
        backtrack(i + 1, path.concat(nums[i]));
      }
    }
  };
  backtrack(0, []);
  return Array.from(res, JSON.parse);
}
