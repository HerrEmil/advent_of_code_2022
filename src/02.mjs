/*
X Rock 1
Y Paper 2
Z Scissors 3
*/

const shapePointsLookup = {
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
};

const resultPointsFromShapesLookup = {
  // Rock
  A: {
    X: 3, // Rock
    Y: 6, // Paper
    Z: 0, // Scissors
  },
  // Paper
  B: {
    X: 0, // Rock
    Y: 3, // Paper
    Z: 6, // Scissors
  },
  // Scissors
  C: {
    X: 6, // Rock
    Y: 0, // Paper
    Z: 3, // Scissors
  },
};

export const part1 = (data) => {
  const result = data
    .map(([opponentShape, shape]) => {
      const shapePoint = shapePointsLookup[shape];
      const resultPoint = resultPointsFromShapesLookup[opponentShape][shape];
      // console.log('shapePoint', shapePoint);
      // console.log('resultPoint', resultPoint);
      return shapePoint + resultPoint;
    })
    .reduce((totalPoints, points) => totalPoints + points, 0);
  return result;
};

const resultPointLookup = {
  X: 0, // lose
  Y: 3, // draw
  Z: 6, // win
};

/*
X lose
Y draw
Z win
*/

const shapePointsFromResultLookup = {
  // Rock
  A: {
    X: 3, // lose with scissors
    Y: 1, // draw with rock
    Z: 2, // win with paper
  },
  // Paper
  B: {
    X: 1, // lose with rock
    Y: 2, // draw with paper
    Z: 3, // win with scissors
  },
  // Scissors
  C: {
    X: 2, // lose with paper
    Y: 3, // draw with scissors
    Z: 1, // win with rock
  },
};

export const part2 = (data) => {
  const result = data
    .map(([opponentShape, result]) => {
      const resultPoint = resultPointLookup[result];
      const shapePoint = shapePointsFromResultLookup[opponentShape][result];
      // console.log(opponentShape, result);
      // console.log('shapePoint', shapePoint);
      // console.log("resultPoint", resultPoint);
      return shapePoint + resultPoint;
    })
    .reduce((acc, curr) => acc + curr, 0);
  return result;
};

export const parseData = (data) => {
  return data.split("\n").map((game) => game.split(" "));
};
