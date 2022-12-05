import { strictEqual } from "assert";
import { parseData, part1, part2 } from "./05.mjs";

describe("Day 05 tests", () => {
  it("should ", () => {
    const data = parseData(`    [D]    
[N] [C]    
[Z] [M] [P]
  1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`);

    strictEqual(part1(data), "CMZ");
  });

  it("should ", () => {
    const data = parseData(`    [D]    
[N] [C]    
[Z] [M] [P]
  1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`);
    strictEqual(part2(data), "MCD");
  });
});
