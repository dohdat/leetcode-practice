/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  function find(n) {
    let p = arr[n];
    while (p !== arr[p]) {
      p = arr[p];
    }
    return p;
  }

  for (let [src, dst] of edges) {
    let p1 = find(src);
    let p2 = find(dst);
    if (p1 !== p2) {
      arr[p1] = arr[p2];
      n--;
    }
  }
  return n;
};
