var spiralOrder = function(matrix) {
  let res = [];
  while (matrix.length) {
    let first = matrix.shift();
    res.push(...first);
    for (let m of matrix) {
      let val = m.pop();
      if (val) res.push(val);
      m.reverse();
    }
    matrix.reverse();
  }
  return res;
};
