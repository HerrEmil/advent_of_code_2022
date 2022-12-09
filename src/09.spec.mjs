import { strictEqual } from "assert";
import { parseData, part1, part2 } from "./09.mjs";

describe("Day 09 tests", () => {
  const data = parseData(`
R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2
`);

  it("should return the number of positions tail visited", () => {
    strictEqual(part1(data), 13);
  });
  it("should return the number of positions last knot visited", () => {
    strictEqual(part2(data), 1);
  });
  it("should return the number of positions last knot visited, larger example", () => {
    const data = parseData(`
R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20    
    `);
    strictEqual(part2(data), 36);
  });
});
