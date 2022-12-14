import { strictEqual } from "assert";
import { parseData, part1, part2 } from "./13.mjs";

describe("Day 13 tests", () => {
  const data = parseData(`
[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]
  `);

  it("should ", () => {
    strictEqual(part1(data), 13);
  });

  it("should ", () => {
    strictEqual(part2(1), 1);
  });
});
