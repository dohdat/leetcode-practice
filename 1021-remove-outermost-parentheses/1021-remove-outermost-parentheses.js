/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  let res = "";
  function isValid(str) {
    const stack = [];
    const map = {
      "(": ")"
    };
    for (let c of str) {
      if (map[c]) {
        stack.push(map[c]);
      } else if (c !== stack.pop()) {
        return false;
      }
    }
    return !stack.length;
  }

  let left = 0;
  for (let right = 0; right <= s.length; right++) {
    let newStr = s.slice(left, right);
    if (isValid(newStr)) {
      res += newStr.slice(1, -1);
      left = right;
    }
  }
  return res;
};
