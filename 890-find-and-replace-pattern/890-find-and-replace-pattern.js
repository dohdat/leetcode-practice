/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  let res = [];
  function match(word, pattern) {
    let m1 = new Map();
    let m2 = new Map();
    for (let i = 0; i < word.length; i++) {
      let w = word[i];
      let p = pattern[i];
      if (!m1.has(w)) m1.set(w, p);
      if (!m2.has(p)) m2.set(p, w);
      if (m1.get(w) !== p || m2.get(p) !== w) return false;
    }
    return true;
  }
  for (let w of words) {
    if (match(w, pattern)) {
      res.push(w);
    }
  }
  return res;
};
