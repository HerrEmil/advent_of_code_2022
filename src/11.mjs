export const part1 = (monkeysIn) => {
  const monkeys = [
    ...monkeysIn.map((monkey) => ({
      ...monkey,
      items: [...monkey.items],
    })),
  ];
  const monkeyInspectCounts = new Array(monkeys.length).fill(0);

  const rounds = 20;
  const numberOfMonkeys = monkeys.length;

  for (let i = 0; i < rounds; i++) {
    for (let j = 0; j < numberOfMonkeys; j++) {
      const monkey = monkeys[j];
      monkey.items.forEach((old) => {
        let newWorry;
        eval(monkey.operation);
        monkeyInspectCounts[j] += 1;
        newWorry = Math.floor(newWorry / 3);

        if (newWorry % monkey.testDivision === 0) {
          monkeys[monkey.trueMonkey].items.push(newWorry);
        } else {
          monkeys[monkey.falseMonkey].items.push(newWorry);
        }

        monkey.items = [];
      });
    }
  }

  const [first, second] = monkeyInspectCounts.sort((a, b) => b - a);

  return first * second;
};

export const part2 = (monkeysIn) => {
  const monkeys = [
    ...monkeysIn.map((monkey) => ({
      ...monkey,
      items: monkey.items.map(BigInt),
      testDivision: BigInt(monkey.testDivision),
      operation:
        monkey.operation.replace("+ ", "+ BigInt(").replace("* ", "* BigInt(") +
        ")",
    })),
  ];
  const monkeyInspectCounts = new Array(monkeys.length).fill(0);

  const rounds = 10000;
  const numberOfMonkeys = monkeys.length;

  const highestValue = monkeys
    .map((monkey) => monkey.testDivision)
    .reduce((a, b) => a * b, BigInt(1));

  for (let i = 0; i < rounds; i++) {
    for (let j = 0; j < numberOfMonkeys; j++) {
      const monkey = monkeys[j];
      monkey.items.forEach((old) => {
        let newWorry;
        eval(monkey.operation);
        monkeyInspectCounts[j] += 1;

        //
        newWorry = newWorry % highestValue;

        if (newWorry % monkey.testDivision) {
          monkeys[monkey.falseMonkey].items.push(newWorry);
        } else {
          monkeys[monkey.trueMonkey].items.push(newWorry);
        }

        monkey.items = [];
      });
    }
  }

  const [first, second] = monkeyInspectCounts.sort((a, b) => b - a);

  return first * second;
};

export const parseData = (data) => {
  return data
    .trim()
    .split("Monkey ")
    .filter(Boolean)
    .map((monkeyInfo) => {
      const [
        monkeyLine,
        startItemsLine,
        operationLine,
        testLine,
        trueLine,
        falseLine,
      ] = monkeyInfo.split("\n");

      const monkey = Number(monkeyLine.charAt(0));
      const items = startItemsLine.split(": ")[1].split(", ").map(Number);
      const operation = operationLine.split(": ")[1].replace("new", "newWorry");
      const testDivision = Number(testLine.split(" by ")[1]);
      const trueMonkey = Number(trueLine.split("monkey ")[1]);
      const falseMonkey = Number(falseLine.split("monkey ")[1]);

      return {
        monkey,
        items,
        operation,
        testDivision,
        trueMonkey,
        falseMonkey,
      };
    });
};
