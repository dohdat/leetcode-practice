function checkValidString(s) {
  let balance = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" || s[i] === "*" ? balance++ : balance--;
    if (balance < 0) return false;
  }
  if (balance === 0) return true;
  balance = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    s[i] === ")" || s[i] === "*" ? balance++ : balance--;
    if (balance < 0) return false;
  }
  return true;
}
