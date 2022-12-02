import { strictEqual } from "assert";
import { part1, part2, parseData } from "./02.mjs";

describe("Day 02 tests", () => {
  const data = parseData(`A Y
B X
C Z`);

  it("should ", () => {
    strictEqual(part1(data), 15);
  });
  it("should ", () => {
    strictEqual(part2(data), 12);
  });
});
