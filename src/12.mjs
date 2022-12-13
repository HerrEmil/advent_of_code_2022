const getHeight = (char) => {
  if (char === "S") return 0;
  if (char === "E") return 25;
  const charCode = char.charCodeAt(0);
  return charCode - "a".charCodeAt(0);
};

const pointToInt = (x, y) => x + y * 100000;
const intToPoint = (int) => ({ x: int % 100000, y: Math.floor(int / 100000) });

const dijkstra = (graph) => {
  const dist = {};
  const prev = {};
  let queue = [];

  graph.forEach((line) => {
    line.forEach((point) => {
      dist[pointToInt(point.x, point.y)] = Infinity;
      prev[pointToInt(point.x, point.y)] = undefined;
      queue.push(pointToInt(point.x, point.y));
    });
  });

  dist[0] = 0;

  while (queue.length > 0) {
    const uInt = queue.reduce((a, b) => (dist[a] < dist[b] ? a : b));
    const { x, y } = intToPoint(uInt);
    const u = graph[y][x];
    queue = queue.filter((x) => x !== uInt);

    // if (u.isEnd) {
    //   break;
    // }

    // console.log(u);
    // console.log(u.neighbors);

    Object.values(u.neighbors)
      .map(({ x, y }) => pointToInt(x, y))
      .forEach((v) => {
        const alt = dist[uInt] + 1;
        if (alt < dist[v]) {
          dist[v] = alt;
          prev[v] = uInt;
        }
      });
  }

  return { dist, prev };
};

export const part1 = (heightMap) => {
  // filter out all neighbors that are too high to reach
  const graph = heightMap.map((line) => {
    return line.map((point) => {
      return {
        ...point,
        neighbors: Object.entries(point.neighbors)
          .filter(
            ([_, neighbor]) => neighbor && neighbor.height <= point.height + 1
          )
          .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
          }, {}),
      };
    });
  });

  const { dist, prev } = dijkstra(graph);

  const lineLength = graph[0].length;
  const numberOfLines = graph.length;

  // for (let y = 0; y < numberOfLines; y++) {
  //   const line = Object.values(dist).slice(
  //     y * lineLength,
  //     (y + 1) * lineLength
  //   );
  //   console.log(
  //     line.map((number) => number.toString().padStart(3, "0")).join("")
  //   );
  // }

  // TODO: print prev path with arrows, look for error

  const endPoint = graph
    .map((line) => line.find((point) => point.isEnd))
    .find((point) => point && point.isEnd);
  const endInt = pointToInt(endPoint.x, endPoint.y);
  const longest = dist[endInt];

  return longest;
};

export const part2 = (data) => {
  return data;
};

export const parseData = (data) => {
  const heightMap = data
    .trim()
    .split("\n")
    .map((line, y) =>
      line.split("").map((char, x) => ({
        x,
        y,
        char,
        ...(char === "S" && { isStart: true }),
        ...(char === "E" && { isEnd: true }),
        height: getHeight(char),
      }))
    );

  return heightMap.map((line, y) => {
    return line.map((currentPosition, x) => {
      const left = line[x - 1];
      const right = line[x + 1];
      const top = y > 0 ? heightMap[y - 1][x] : undefined;
      const bottom = y < heightMap.length - 1 ? heightMap[y + 1][x] : undefined;
      return {
        ...currentPosition,
        neighbors: { left, right, top, bottom },
      };
    });
  });
};
