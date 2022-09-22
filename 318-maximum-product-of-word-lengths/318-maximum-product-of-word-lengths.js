/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let res = -Infinity;
  words.sort((a, b) => b.length - a.length);
  function checkCommon(a, b) {
    if (b.length < a.length) {
      return checkCommon(b, a);
    }
    for (let i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) != -1) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let cur = words[i];
      let next = words[j];
      if (!checkCommon(cur, next)) {
        res = Math.max(res, cur.length * next.length);
        break;
      }
    }
  }
  return res === -Infinity ? 0 : res;
};
