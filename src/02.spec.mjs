import { strictEqual } from "assert";
import { part1, part2, parseData } from "./02.mjs";

describe("Day 02 tests", () => {
  const data = parseData(`A Y
B X
C Z`);

  it("should return total score from each game of rock paper scissors", () => {
    strictEqual(part1(data), 15);
  });
  it("should return total score from each game of rock paper scissors", () => {
    strictEqual(part2(data), 12);
  });
});
