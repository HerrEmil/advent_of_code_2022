import { strictEqual } from "assert";
import { parseData, part1, part2 } from "./03.mjs";

describe("Day 03 tests", () => {
  const data = parseData(`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`);

  it("should return sum of priority of items in both compartments in each rucksack", () => {
    strictEqual(part1(data), 157);
  });
  it("should return sum of priority of common items in each group of three rucksacks", () => {
    strictEqual(part2(data), 70);
  });
});
