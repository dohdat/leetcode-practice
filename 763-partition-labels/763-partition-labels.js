/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  let map = new Map();
  let res = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    map.set(cur, i);
  }
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    end = Math.max(map.get(cur), end);
    if (i + 1 > end) {
      res.push([1 + end - start]);
      start = i + 1;
    }
  }
  return res;
};
