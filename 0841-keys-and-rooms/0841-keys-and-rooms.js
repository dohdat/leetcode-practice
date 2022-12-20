var canVisitAllRooms = function(rooms) {
  let arr = new Array(rooms.length).fill(false);

  let stack = [0];
  arr[0] = true;
  while (stack.length > 0) {
    let room = stack.pop();
    for (let i = 0; i < rooms[room].length; i++) {
      let key = rooms[room][i];
      if (arr[key]) continue;
      arr[key] = true;
      stack.push(key);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == false) return false;
  }
  return true;
};
