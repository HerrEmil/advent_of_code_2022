export const part1 = (data) => {
  return data.slice(-1)[0];
};

export const part2 = (data) => {
  const [last, secondLast, ThirdLast] = data.slice(-3);
  return last + secondLast + ThirdLast;
};

export const parseData = (data) => {
  return data
    .split("\n\n")
    .map((caloriesPerElf) =>
      caloriesPerElf
        .split("\n")
        .map((calories) => Number(calories))
        .reduce((sumCal, currCal) => sumCal + currCal, 0)
    )
    .sort((a, b) => a - b);
};
