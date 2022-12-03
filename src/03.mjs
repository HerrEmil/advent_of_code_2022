export const part1 = (data) => {
  return data
    .map((rucksackItems) => {
      const half = rucksackItems.length / 2;
      return [
        rucksackItems.slice(0, half),
        rucksackItems.slice(half, rucksackItems.length),
      ];
    })
    .map(([firstCompartment, secondCompartment]) => {
      const commonItem = firstCompartment.split("").find((item) => {
        // console.log(item);
        // console.log(secondCompartment);
        return secondCompartment.includes(item);
      });
      // console.log(commonItem);
      return commonItem;
    })
    .map((commonItem) => commonItem.charCodeAt(0))
    .map((charCode) => (charCode > 96 ? charCode - 96 : charCode - 64 + 26))
    .reduce((acc, curr) => acc + curr, 0);
};

export const part2 = (data) => {
  return data
    .map((rucksack, index) => {
      if (index % 3 === 0) {
        return [rucksack, data[index + 1], data[index + 2]];
      }
    })
    .filter(Boolean)
    .map(([rucksack1, rucksack2, rucksack3]) => {
      const commonItem = rucksack1.split("").find((item) => {
        // console.log(item);
        // console.log(secondCompartment);
        return rucksack2.includes(item) && rucksack3.includes(item);
      });
      return commonItem;
    })
    .map((commonItem) => commonItem.charCodeAt(0))
    .map((charCode) => (charCode > 96 ? charCode - 96 : charCode - 64 + 26))
    .reduce((acc, curr) => acc + curr, 0);
};

export const parseData = (data) => {
  return data.split("\n");
};
