const compareArrays = (leftValue, rightValue, isRightOrder) => {
  leftValue.forEach((leftArrayValue, arrayIndex) => {
    if (leftArrayValue < rightValue[arrayIndex]) {
      isRightOrder();
      return;
    }
    if (rightValue[arrayIndex] < leftArrayValue) {
      return;
    }
  });
};

export const part1 = (pairs) => {
  const indexOfPairsInRightOrder = [];
  pairs.forEach(({ left, right }, pairIndex) => {
    let index = 0;
    while (index <= left.length && index <= right.length) {
      let leftValue = left[index];
      let rightValue = right[index];

      // if one is undefined
      if (leftValue === undefined && rightValue !== undefined) {
        indexOfPairsInRightOrder.push(pairIndex + 1);
        break;
      }
      if (rightValue === undefined && leftValue !== undefined) {
        break;
      }

      // if both are numbers
      if (typeof leftValue === "number" && typeof rightValue === "number") {
        if (leftValue < rightValue) {
          indexOfPairsInRightOrder.push(pairIndex + 1);
          break;
        }
        if (rightValue < leftValue) {
          break;
        }
      }

      // if both are arrays
      if (Array.isArray(leftValue) && Array.isArray(rightValue)) {
        let shouldBreak = false;
        compareArrays(leftValue, rightValue, () => {
          indexOfPairsInRightOrder.push(pairIndex + 1);
          shouldBreak = true;
          return;
        });
        if (shouldBreak) {
          break;
        }
      }

      // if one is array and one is number, convert both to array and compare arrays
      const leftArray = Array.isArray(leftValue) ? leftValue : [leftValue];
      const rightArray = Array.isArray(rightValue) ? rightValue : [rightValue];
      let shouldBreak = false;
      compareArrays(leftArray, rightArray, () => {
        indexOfPairsInRightOrder.push(pairIndex + 1);
        shouldBreak = true;
        return;
      });
      if (shouldBreak) {
        break;
      }

      index = index + 1;
    }
  });

  // console.log(indexOfPairsInRightOrder);

  const noDupes = new Set(indexOfPairsInRightOrder);
  const noDupesArray = [...noDupes];

  // console.log(noDupesArray);

  return noDupesArray.reduce((acc, curr) => acc + curr, 0);
};

export const part2 = (data) => {
  return 1;
};

export const parseData = (data) => {
  return data
    .trim()
    .split("\n\n")
    .map((group) => {
      const [left, right] = group.split("\n").map((line) => JSON.parse(line));
      return { left, right };
    });
};
