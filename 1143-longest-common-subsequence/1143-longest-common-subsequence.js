var longestCommonSubsequence = function(text1, text2) {
  const memo = new Map();
  function recursion(index1, index2) {
    // base cases
    if (index1 < 0 || index2 < 0) return 0;

    const key = index1 + "#" + index2;

    if (memo.has(key)) return memo.get(key);

    let result;

    if (text1.charAt(index1) === text2.charAt(index2)) {
      result = recursion(index1 - 1, index2 - 1) + 1;
    } else {
      result = Math.max(
        recursion(index1, index2 - 1),
        recursion(index1 - 1, index2)
      );
    }

    memo.set(key, result);
    return result;
  }
  return recursion(text1.length - 1, text2.length - 1);
};
