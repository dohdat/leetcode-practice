/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let preMap = new Map();
  let res = [];
  for (let w of strs) {
    let c = w.split("").sort().join("");
    preMap.set(c, (preMap.get(c) || []).concat(w));
  }
  for (let [key, val] of preMap) {
    res.push(val);
  }
  return res;
};
