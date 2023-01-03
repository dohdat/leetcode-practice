var isValid = function(s) {
  const stack = [];
  const pairs = { "(": ")", "[": "]", "{": "}" };
  for (const c of s) {
    if (c in pairs) stack.push(c);
    else if (stack.length === 0 || pairs[stack.pop()] !== c) return false;
  }
  return stack.length === 0;
};
