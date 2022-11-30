/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  let res = [];
  function appearOnce(arr1) {
    let output = [];
    let map = new Map();
    for (let c of arr1) {
      map.set(c, (map.get(c) || 0) + 1);
    }

    for (let [c, freq] of map) {
      if (freq === 1) {
        output.push(c);
      }
    }
    return output;
  }
  let arr1 = appearOnce(s1.split(" "));
  let arr2 = appearOnce(s2.split(" "));
  for (let w of arr1) {
    if (!arr2.includes(w) && !s2.split(" ").includes(w)) {
      res.push(w);
    }
  }
  for (let w of arr2) {
    if (!arr1.includes(w) && !s1.split(" ").includes(w)) {
      res.push(w);
    }
  }
  return res;
};
