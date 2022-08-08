/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  let res = 0;
  function isSub(word, s) {
    let lastIndex = -1;
    let match = 0;
    for (let c of word) {
      let curIndex = s.indexOf(c, lastIndex + 1);
      if (curIndex > lastIndex) {
        match++;
        lastIndex = curIndex;
      } else {
        break;
      }
    }
    return match === word.length;
  }
  for (let word of words) {
    if (word.length > s.length) continue;
    if (isSub(word, s)) {
      res++;
    }
  }
  return res;
};
