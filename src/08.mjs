const printGrid = (grid) => {
  grid.forEach((row) => {
    console.log(row.join(""));
  });
};

export const part1 = (trees) => {
  const visibleTrees = trees.map((treeRow, treeRowIndex) => {
    return treeRow.map((treeHeight, treeColumnIndex) => {
      const treesToTheLeft = trees[treeRowIndex].slice(0, treeColumnIndex);
      if (treesToTheLeft.every((tree) => tree < treeHeight)) {
        return treeHeight;
      }

      const treesToTheRight = trees[treeRowIndex].slice(treeColumnIndex + 1);
      if (treesToTheRight.every((tree) => tree < treeHeight)) {
        return treeHeight;
      }

      const treesAbove = trees
        .slice(0, treeRowIndex)
        .map((treeRow) => treeRow[treeColumnIndex]);
      if (treesAbove.every((tree) => tree < treeHeight)) {
        return treeHeight;
      }

      const treesBelow = trees
        .slice(treeRowIndex + 1)
        .map((treeRow) => treeRow[treeColumnIndex]);
      if (treesBelow.every((tree) => tree < treeHeight)) {
        return treeHeight;
      }

      return "-";
    });
  });

  // printGrid(visibleTrees);

  return visibleTrees.flatMap((row) => row.filter((tree) => tree !== "-"))
    .length;
};

const getNumberOfVisibleTreesInArray = (trees, treeHeight) => {
  const firstTallTree = trees.findIndex((tree) => tree >= treeHeight);
  const visibleTrees =
    firstTallTree === -1 ? trees : trees.slice(0, firstTallTree + 1);
  return visibleTrees.length;
};

export const part2 = (trees) => {
  const scenicScores = trees.map((treeRow, treeRowIndex) => {
    return treeRow.map((treeHeight, treeColumnIndex) => {
      const treesToTheLeft = trees[treeRowIndex]
        .slice(0, treeColumnIndex)
        .reverse();

      const numberOfVisibleTreesToTheLeft = getNumberOfVisibleTreesInArray(
        treesToTheLeft,
        treeHeight
      );

      const treesToTheRight = trees[treeRowIndex].slice(treeColumnIndex + 1);
      const numberOfVisibleTreesToTheRight = getNumberOfVisibleTreesInArray(
        treesToTheRight,
        treeHeight
      );

      const treesAbove = trees
        .slice(0, treeRowIndex)
        .map((treeRow) => treeRow[treeColumnIndex])
        .reverse();
      const numberOfVisibleTreesAbove = getNumberOfVisibleTreesInArray(
        treesAbove,
        treeHeight
      );

      const treesBelow = trees
        .slice(treeRowIndex + 1)
        .map((treeRow) => treeRow[treeColumnIndex]);
      const numberOfVisibleTreesBelow = getNumberOfVisibleTreesInArray(
        treesBelow,
        treeHeight
      );

      return (
        numberOfVisibleTreesToTheLeft *
        numberOfVisibleTreesToTheRight *
        numberOfVisibleTreesAbove *
        numberOfVisibleTreesBelow
      );
    });
  });

  // printGrid(scenicScores);

  const highestScenicScore = scenicScores
    .flatMap((row) => row)
    .sort((a, b) => b - a)[0];
  // console.log("highestScenicScore", highestScenicScore);

  return highestScenicScore;
};

export const parseData = (data) => {
  return data
    .trim()
    .split("\n")
    .map((line) => line.split("").map(Number));
};
