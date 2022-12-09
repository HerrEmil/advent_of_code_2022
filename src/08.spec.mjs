import { strictEqual } from "assert";
import { parseData, part1, part2 } from "./08.mjs";

describe("Day 08 tests", () => {
  const getData = () =>
    parseData(`
30373
25512
65332
33549
35390
  `);

  it("should return the number of trees visible from outside the grid", () => {
    strictEqual(part1(getData()), 21);
  });
  it("should return the scenic value of the tree with the best view", () => {
    strictEqual(part2(getData()), 8);
  });
});
