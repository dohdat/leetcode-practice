const confusingNumber = n => {
  let rotated = n
    .toString()
    .split("")
    .map(x => {
      if (x === "0" || x === "1" || x === "8") return x;
      if (x === "6") return "9";
      if (x === "9") return "6";
      return null;
    })
    .reverse()
    .join("");
  if (rotated === "" || rotated.length !== n.toString().length) {
    return false;
  }

  return rotated !== n.toString();
};
