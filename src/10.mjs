export const part1 = (instructions) => {
  let x = 1;
  const registerHistory = [];

  for (const instruction of instructions) {
    if (instruction.op === "addx") {
      registerHistory.push(x);
      registerHistory.push(x);
      x += instruction.arg;
    } else {
      registerHistory.push(x);
    }
  }

  let signalStrength = 0;

  for (let i = 0; i < registerHistory.length; i++) {
    if ((i - 20) % 40 === 0) {
      signalStrength += registerHistory[i - 1] * i;
    }
  }

  return signalStrength;
};

const getScreenRender = (screen) => {
  let output = "";
  for (let i = 0; i < screen.length; i++) {
    if (i && i % 40 === 0) {
      output += "\n";
    }
    output += screen[i];
  }
  return output;
};

export const part2 = (instructions) => {
  const screen = new Array(240).fill(".");

  let spriteCenter = 1;
  const spritePositionEachCycle = [];

  instructions.forEach((instruction, i) => {
    if (instruction.op === "addx") {
      spritePositionEachCycle.push(spriteCenter);
      spritePositionEachCycle.push(spriteCenter);
      if (i && i % 40 === 0) {
        spriteCenter += 40;
      }
      spriteCenter += instruction.arg;
    } else {
      spritePositionEachCycle.push(spriteCenter);
    }
  });

  const cycle = 240;
  for (let i = 0; i < cycle; i++) {
    const spriteCenter = spritePositionEachCycle[i];
    const spriteStart = spriteCenter - 1;
    const spriteEnd = spriteCenter + 1;

    if ([spriteStart, spriteCenter, spriteEnd].includes(i % 40)) {
      screen[i] = "#";
    }
  }

  return getScreenRender(screen);
};

export const parseData = (data) => {
  return data
    .trim()
    .split("\n")
    .map((line) => {
      if (line === "noop") {
        return { op: "noop" };
      }
      const [op, arg] = line.split(" ");
      return { op, arg: Number(arg) };
    });
};
