var minFallingPathSum = function(matrix) {
  let arr = Array.from(Array(matrix.length), () =>
    new Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix[0].length; i++) {
    arr[0][i] = matrix[0][i];
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (j == 0) arr[i][j] = Math.min(arr[i - 1][j], arr[i - 1][j + 1]);
      else if (j == matrix[0].length - 1)
        arr[i][j] = Math.min(arr[i - 1][j - 1], arr[i - 1][j]);
      else
        arr[i][j] = Math.min(
          arr[i - 1][j - 1],
          arr[i - 1][j],
          arr[i - 1][j + 1]
        );
      arr[i][j] += matrix[i][j];
    }
  }
  return Math.min(...arr[arr.length - 1]);
};
