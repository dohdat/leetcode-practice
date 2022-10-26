/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  let parent = new Map();
  function find(a) {
    parent.set(a, parent.get(a) || a);
    return parent.get(a) === a ? a : find(parent.get(a));
  }
  for (let [a, s, , b] of equations) {
    if (s === "=") {
      find(a);
      find(b);
      parent.set(find(a), find(b));
    }
  }
  for (let [a, s, , b] of equations) {
    if (s === "!") {
      if (find(a) === find(b)) return false;
    }
  }
  return true;
};
