var longestCommonSubsequence = function(text1, text2) {
  const memo = new Map();
  if (text2.length > text1.length) {
    longestCommonSubsequence(text2, text1);
  }
  function recursion(index1, index2) {
    // base cases
    if (index1 < 0 || index2 < 0) return 0;

    const key = index1 + "#" + index2;

    if (memo.has(key)) return memo.get(key);

    let result = 0;
    if (text1[index1] === text2[index2]) {
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
