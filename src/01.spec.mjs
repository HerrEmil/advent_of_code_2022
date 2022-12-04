import { strictEqual } from "assert";
import { parseData, part1, part2 } from "./01.mjs";

describe("Day 01 tests", () => {
  const testInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

  it("should return the sum of calories of elf carrying the most", () => {
    const data = parseData(testInput);
    strictEqual(part1(data), 24000);
  });

  it("should return the sum of calories of the three elves carrying the most", () => {
    const data = parseData(testInput);
    strictEqual(part2(data), 45000);
  });
});
