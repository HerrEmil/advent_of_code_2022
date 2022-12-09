import { strictEqual } from "assert";
import { parseData, part1, part2 } from "./07.mjs";

describe("Day 07 tests", () => {
  const getCommands = () =>
    parseData(`$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`);

  it("should return the sum of all small folders' total size", () => {
    strictEqual(part1(getCommands()), 95437);
  });
  it("should return the total size of the smallest folder that is bigger than the needed free space", () => {
    strictEqual(part2(getCommands()), 24933642);
  });
});
