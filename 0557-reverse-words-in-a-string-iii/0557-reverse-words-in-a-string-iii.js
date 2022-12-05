/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let res = "";
  let words = s.split(" ");
  for (let [i, w] of words.entries()) {
    res += w.split("").reverse().join("");
    if (i !== words.length-1) {
      res += " ";
    }
  }
  return res;
};
