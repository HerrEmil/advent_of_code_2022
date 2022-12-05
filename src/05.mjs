export const part1 = ([stacksParam, moves]) => {
  const stacks = stacksParam.map((stack) => [...stack]);
  moves.forEach(({ move, from, to }) => {
    const fromIndex = from - 1;
    const toIndex = to - 1;

    for (let i = 0; i < move; i += 1) {
      const item = stacks[fromIndex].pop();
      stacks[toIndex].push(item);
    }
  });

  // console.log(stacks);

  const topBoxes = stacks.map((stack) => stack[stack.length - 1]);
  // console.log(topBoxes);

  return topBoxes.join("");
};

export const part2 = ([stacksParam, moves]) => {
  const stacks = stacksParam.map((stack) => [...stack]);
  // console.log(stacks);
  moves.forEach(({ move, from, to }) => {
    const fromIndex = from - 1;
    const toIndex = to - 1;

    // console.log(move, from, to);

    const boxes = stacks[fromIndex].splice(-move);
    stacks[toIndex].push(...boxes);

    // console.log(stacks);
    // console.log("========");

    // for (let i = 0; i < move; i += 1) {
    //   const item = stacks[fromIndex].pop();
    //   stacks[toIndex].push(item);
    // }
  });

  // console.log(stacks);

  const topBoxes = stacks.map((stack) => stack[stack.length - 1]);
  // console.log(topBoxes);

  return topBoxes.join("");
};

export const parseData = (data) => {
  const [stacksData, movesData] = data.split("\n\n");
  const numberOfStacks = Number(stacksData.split("\n").pop().trim().slice(-1));
  // console.log(numberOfStacks);

  const boxRows = stacksData.split("\n").map((line) => {
    const lineBoxes = [];
    for (let i = 0; i < numberOfStacks; i += 1) {
      if (i === 0) {
        lineBoxes.push(line.charAt(1));
      } else {
        lineBoxes.push(line.charAt(1 + i * 4));
      }
    }
    // console.log(lineBoxes);
    return lineBoxes;
  });
  boxRows.pop();

  // console.log(boxRows);

  const stacks = new Array(numberOfStacks)
    .fill(null)
    .map(() => [])
    .map((stack, stackIndex) => {
      boxRows.forEach((row) => {
        if (row[stackIndex] !== " ") {
          stack.push(row[stackIndex]);
        }
      });
      return stack.reverse();
    });
  // console.log(stacks);

  const instructions = movesData.split("\n").map((line) => {
    const move = Number(line.split("move ")[1].split(" from")[0]);
    const from = Number(line.split(" from ")[1].split(" to")[0]);
    const to = Number(line.split(" to ")[1]);
    return { move, from, to };
  });
  return [stacks, instructions];
};
