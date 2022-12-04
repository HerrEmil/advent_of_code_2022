import { strictEqual } from "assert";
import { parseData, part1, part2 } from "./04.mjs";

describe("Day 04 tests", () => {
  const data = parseData(`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`);

  it("should return the number of pairs where one range contains the other", () => {
    strictEqual(part1(data), 2);
  });
  it("should return the number of pairs where ranges overlap", () => {
    strictEqual(part2(data), 4);
  });
});
