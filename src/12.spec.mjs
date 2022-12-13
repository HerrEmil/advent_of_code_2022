import { strictEqual } from "assert";
import { parseData, part1, part2 } from "./12.mjs";

describe("Day 12 tests", () => {
  const data = parseData(`
Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi
  `);

  it("should ", () => {
    strictEqual(part1(data), 31);
  });
  it("should ", () => {
    strictEqual(part2(1), 1);
  });
});
