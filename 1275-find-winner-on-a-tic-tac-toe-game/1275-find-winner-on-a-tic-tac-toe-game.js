var tictactoe = function(moves) {
  // record and move on approach
  let rows = [0, 0, 0], cols = [0, 0, 0], dia = 0, antiDia = 0, count = 0;
  for (let [r, c] of moves) {
    let value = count % 2 === 0 ? 1 : -1;
    rows[r] += value;
    cols[c] += value;

    if (r + c === 2) {
      antiDia += value;
    }

    if (r === c) {
      dia += value;
    }
    if ([rows[r], cols[c], antiDia, dia].includes(3)) {
      return "A";
    } else if ([rows[r], cols[c], antiDia, dia].includes(-3)) {
      return "B";
    }
    count++;
  }
  if (count < 9) {
    return "Pending";
  }
  return "Draw";
};
