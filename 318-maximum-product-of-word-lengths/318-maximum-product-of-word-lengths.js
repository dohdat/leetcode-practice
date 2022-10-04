/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let res = -Infinity;
  words.sort((a, b) => b.length - a.length);
  function checkUnCommon(word1, word2) {
    for (let i = 0; i < word1.length; i++) {
      let c = word1[i];
      if (word2.indexOf(c) != -1) {
        return true;
      }
    }
    return false;
  }
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let cur = words[i];
      let next = words[j];
      if (!checkUnCommon(cur, next)) {
        res = Math.max(res, cur.length * next.length);
        break;
      }
    }
  }
  return res === -Infinity ? 0 : res;
};
