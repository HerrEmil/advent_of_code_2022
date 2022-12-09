const move = (head, direction) => {
  switch (direction) {
    case "U":
      head.y++;
      break;
    case "D":
      head.y--;
      break;
    case "L":
      head.x--;
      break;
    case "R":
      head.x++;
      break;
  }
};

const follow = (leader, follower) => {
  const xDiff = leader.x - follower.x; // -2, -1, 0, 1, 2
  const yDiff = leader.y - follower.y; // -2, -1, 0, 1, 2
  const xDistance = Math.abs(xDiff); // 0, 1, 2
  const yDistance = Math.abs(yDiff); // 0, 1, 2

  if (xDistance < 2 && yDistance < 2) {
    return;
  }

  if (xDistance === 2) {
    follower.x += xDiff / 2;
    if (yDistance === 1) {
      follower.y += yDiff;
    }
  }

  if (yDistance === 2) {
    follower.y += yDiff / 2;
    if (xDistance === 1) {
      follower.x += xDiff;
    }
  }
};

export const part1 = (moves) => {
  const head = { x: 0, y: 0 };
  const tail = { x: 0, y: 0 };

  const tailVisited = new Set();
  tailVisited.add("0,0");

  for (const { direction, length } of moves) {
    for (let i = 0; i < length; i++) {
      move(head, direction);
      follow(head, tail);

      tailVisited.add(`${tail.x},${tail.y}`);
    }
  }

  return tailVisited.size;
};

export const part2 = (moves) => {
  const knots = new Array(10).fill(0).map(() => ({ x: 0, y: 0 }));

  const tailVisited = new Set();
  tailVisited.add("0,0");

  for (const { direction, length } of moves) {
    for (let i = 0; i < length; i++) {
      move(knots[0], direction);
      for (let j = 1; j < knots.length; j++) {
        follow(knots[j - 1], knots[j]);
      }

      const tail = knots[knots.length - 1];
      tailVisited.add(`${tail.x},${tail.y}`);
    }
  }

  return tailVisited.size;
};

export const parseData = (data) => {
  return data
    .trim()
    .split("\n")
    .map((line) => {
      const [direction, length] = line.split(" ");
      return { direction, length: Number(length) };
    });
};
