/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  let res = 0;
  let map = new Map();
  function isSub(a, b) {
    if (map.has(a)) return map.get(a);
    let idx = -1;
    for (let char of a) {
      idx = b.indexOf(char, idx + 1);
      if (idx === -1) {
        map.set(a, false);
        return false;
      }
    }
    map.set(a, true);
    return true;
  }
  for (let w of words) {
    if (w.length > s.length) continue;
    if (isSub(w, s)) {
      res++;
    }
  }
  return res;
};
