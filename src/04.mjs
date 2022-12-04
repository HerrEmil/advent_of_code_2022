export const part1 = (pairs) => {
  const fullyContained = pairs.filter(
    ([[elf1Start, elf1End], [elf2Start, elf2End]]) => {
      if (elf1Start <= elf2Start && elf1End >= elf2End) {
        return true;
      }
      if (elf2Start <= elf1Start && elf2End >= elf1End) {
        return true;
      }
    }
  );
  // console.log(fullyContained);
  return fullyContained.length;
};

export const part2 = (pairs) => {
  const overlaps = pairs.filter(
    ([[elf1Start, elf1End], [elf2Start, elf2End]]) => {
      if (elf1Start >= elf2Start && elf1Start <= elf2End) {
        return true;
      }
      if (elf1End >= elf2Start && elf1End <= elf2End) {
        return true;
      }
      if (elf2Start >= elf1Start && elf2Start <= elf1End) {
        return true;
      }
      if (elf2End >= elf1Start && elf2End <= elf1End) {
        return true;
      }
    }
  );
  // console.log(overlaps);
  return overlaps.length;
};

export const parseData = (data) => {
  return data
    .split("\n")
    .map((pair) =>
      pair.split(",").map((assignment) => assignment.split("-").map(Number))
    );
};
