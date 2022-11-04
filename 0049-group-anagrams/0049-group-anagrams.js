/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let preMap = new Map();
  let res = [];
  for (let c of strs) {
    let cur = Array.from(c).sort().join("");
    preMap.set(cur, (preMap.get(cur) || []).concat(c));
  }
  for (let [key, values] of preMap) {
    res.push(values);
  }
  return res;
};
