function checkValidString(s) {
  let balance = 0;

  // left to right : * becomes (
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" || s[i] === "*" ? balance++ : balance--;

    if (balance < 0) return false;
  }

  if (balance === 0) return true;
  // reset balance
  balance = 0;

  // right to left : * becomes )
  for (let i = s.length - 1; i >= 0; i--) {
    // if ) or *, increment balance, else decrement
    s[i] === ")" || s[i] === "*" ? balance++ : balance--;
    // if ever balanced, not even wildcards can save this
    if (balance < 0) return false;
  }

  // never found any problems, cool
  return true;
}
