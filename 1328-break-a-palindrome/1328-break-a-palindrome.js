var breakPalindrome = function(palindrome) {
  let n = palindrome.length;
  let str = palindrome.split("");
  let isChanged = false;

  if (n === 1) {
    return "";
  }
  for (let i = 0; i < n; i++) {
    if (str[i] !== "a" && i !== Math.floor(n / 2)) {
      str[i] = "a";
      isChanged = true;
      break;
    }
  }
  if (!isChanged) {
    str[n - 1] = "b";
  }
  return str.join("");
};
