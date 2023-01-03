var isValid = function(s) {
  const map = {
    "(": true,
    "[": true,
    "{": true
  };
  let stack = [];

  for (let c of s) {
    if (c in map) {
      stack.push(c);
    } else {
      if (c === ")" && stack[stack.length - 1] !== "(") return false;
      if (c === "]" && stack[stack.length - 1] !== "[") return false;
      if (c === "}" && stack[stack.length - 1] !== "{") return false;
      stack.pop();
    }
  }
  return stack.length === 0;
};
