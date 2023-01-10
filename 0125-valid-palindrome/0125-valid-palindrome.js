/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  function stripString(string) {
    return string.replace(/[^A-Z0-9]+/gi, "").toUpperCase();
  }
  let str = stripString(s);
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    let leftChar = str[left];
    let rightChar = str[right];
    if (leftChar === rightChar) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
