/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  let preMap = new Map();
  for (let [src, dst] of edges) {
    preMap.set(src, (preMap.get(src) || []).concat(dst));
    preMap.set(dst, (preMap.get(dst) || []).concat(src));
    if (preMap.get(dst).length > 1) {
      return dst;
    }
  }
};
