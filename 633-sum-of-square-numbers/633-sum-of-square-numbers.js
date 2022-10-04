var judgeSquareSum = function(c) {
  let r = Math.floor(Math.sqrt(c));
  let l = 0;

  while (l <= r) {
    var sum = Math.pow(l, 2) + Math.pow(r, 2);
    if (sum === c) {
      return true;
    } else if (sum < c) {
      l++;
    } else {
      r--;
    }
  }
  return false;
};
