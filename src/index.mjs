import { readFileSync } from "fs";

const readInput = (day) =>
  readFileSync(`./src/${("" + day).padStart(2, "0")}-input.txt`).toString();

import * as day01 from "./01.mjs";
const day01Data = day01.parseData(readInput(1));
console.log(`Day 01, puzzle 1 answer: ${day01.part1(day01Data)}`); // 71124
console.log(`Day 01, puzzle 2 answer: ${day01.part2(day01Data)}`); // 204639

import * as day02 from "./02.mjs";
const day02Data = day02.parseData(readInput(2));
console.log(`Day 02, puzzle 1 answer: ${day02.part1(day02Data)}`); // 13924
console.log(`Day 02, puzzle 2 answer: ${day02.part2(day02Data)}`); // 13448

import * as day03 from "./03.mjs";
const day03Data = day03.parseData(readInput(3));
console.log(`Day 03, puzzle 1 answer: ${day03.part1(day03Data)}`); // 7967
console.log(`Day 03, puzzle 2 answer: ${day03.part2(day03Data)}`); // 2716

import * as day04 from "./04.mjs";
const day04Data = day04.parseData(readInput(4));
console.log(`Day 04, puzzle 1 answer: ${day04.part1(day04Data)}`); // 424
console.log(`Day 04, puzzle 2 answer: ${day04.part2(day04Data)}`); // 804

import * as day05 from "./05.mjs";
const day05Data = day05.parseData(readInput(5));
console.log(`Day 05, puzzle 1 answer: ${day05.part1(day05Data)}`); // QNNTGTPFN
console.log(`Day 05, puzzle 2 answer: ${day05.part2(day05Data)}`); // GGNPJBTTR

import * as day06 from "./06.mjs";
const day06Data = readInput(6);
console.log(`Day 06, puzzle 1 answer: ${day06.part1(day06Data)}`); // 1100
console.log(`Day 06, puzzle 2 answer: ${day06.part2(day06Data)}`); // 2421

import * as day07 from "./07.mjs";
const getDay07Data = () => day07.parseData(readInput(7));
console.log(`Day 07, puzzle 1 answer: ${day07.part1(getDay07Data())}`); // 1443806
console.log(`Day 07, puzzle 2 answer: ${day07.part2(getDay07Data())}`); // 942298

import * as day08 from "./08.mjs";
const day08Data = day08.parseData(readInput(8));
console.log(`Day 08, puzzle 1 answer: ${day08.part1(day08Data)}`); //
console.log(`Day 08, puzzle 2 answer: ${day08.part2(day08Data)}`); //

import * as day09 from "./09.mjs";
const day09Data = day09.parseData(readInput(9));
console.log(`Day 09, puzzle 1 answer: ${day09.part1(day09Data)}`); //
console.log(`Day 09, puzzle 2 answer: ${day09.part2(day09Data)}`); //

import * as day10 from "./10.mjs";
const day10Data = day10.parseData(readInput(10));
console.log(`Day 10, puzzle 1 answer: ${day10.part1(day10Data)}`); //
console.log(`Day 10, puzzle 2 answer: ${day10.part2(day10Data)}`); //

import * as day11 from "./11.mjs";
const day11Data = day11.parseData(readInput(11));
console.log(`Day 11, puzzle 1 answer: ${day11.part1(day11Data)}`); //
console.log(`Day 11, puzzle 2 answer: ${day11.part2(day11Data)}`); //

import * as day12 from "./12.mjs";
const day12Data = day12.parseData(readInput(12));
console.log(`Day 12, puzzle 1 answer: ${day12.part1(day12Data)}`); //
console.log(`Day 12, puzzle 2 answer: ${day12.part2(day12Data)}`); //

import * as day13 from "./13.mjs";
const day13Data = day13.parseData(readInput(13));
console.log(`Day 13, puzzle 1 answer: ${day13.part1(day13Data)}`); //
console.log(`Day 13, puzzle 2 answer: ${day13.part2(day13Data)}`); //

import * as day14 from "./14.mjs";
const day14Data = day14.parseData(readInput(14));
console.log(`Day 14, puzzle 1 answer: ${day14.part1(day14Data)}`); //
console.log(`Day 14, puzzle 2 answer: ${day14.part2(day14Data)}`); //

import * as day15 from "./15.mjs";
const day15Data = day15.parseData(readInput(15));
console.log(`Day 15, puzzle 1 answer: ${day15.part1(day15Data)}`); //
console.log(`Day 15, puzzle 2 answer: ${day15.part2(day15Data)}`); //

import * as day16 from "./16.mjs";
const day16Data = day16.parseData(readInput(16));
console.log(`Day 16, puzzle 1 answer: ${day16.part1(day16Data)}`); //
console.log(`Day 16, puzzle 2 answer: ${day16.part2(day16Data)}`); //

import * as day17 from "./17.mjs";
const day17Data = day17.parseData(readInput(17));
console.log(`Day 17, puzzle 1 answer: ${day17.part1(day17Data)}`); //
console.log(`Day 17, puzzle 2 answer: ${day17.part2(day17Data)}`); //

import * as day18 from "./18.mjs";
const day18Data = day18.parseData(readInput(18));
console.log(`Day 18, puzzle 1 answer: ${day18.part1(day18Data)}`); //
console.log(`Day 18, puzzle 2 answer: ${day18.part2(day18Data)}`); //

import * as day19 from "./19.mjs";
const day19Data = day19.parseData(readInput(19));
console.log(`Day 19, puzzle 1 answer: ${day19.part1(day19Data)}`); //
console.log(`Day 19, puzzle 2 answer: ${day19.part2(day19Data)}`); //

import * as day20 from "./20.mjs";
const day20Data = day20.parseData(readInput(20));
console.log(`Day 20, puzzle 1 answer: ${day20.part1(day20Data)}`); //
console.log(`Day 20, puzzle 2 answer: ${day20.part2(day20Data)}`); //

import * as day21 from "./21.mjs";
const day21Data = day21.parseData(readInput(21));
console.log(`Day 21, puzzle 1 answer: ${day21.part1(day21Data)}`); //
console.log(`Day 21, puzzle 2 answer: ${day21.part2(day21Data)}`); //

import * as day22 from "./22.mjs";
const day22Data = day22.parseData(readInput(22));
console.log(`Day 22, puzzle 1 answer: ${day22.part1(day22Data)}`); //
console.log(`Day 22, puzzle 2 answer: ${day22.part2(day22Data)}`); //

import * as day23 from "./23.mjs";
const day23Data = day23.parseData(readInput(23));
console.log(`Day 23, puzzle 1 answer: ${day23.part1(day23Data)}`); //
console.log(`Day 23, puzzle 2 answer: ${day23.part2(day23Data)}`); //

import * as day24 from "./24.mjs";
const day24Data = day24.parseData(readInput(24));
console.log(`Day 24, puzzle 1 answer: ${day24.part1(day24Data)}`); //
console.log(`Day 24, puzzle 2 answer: ${day24.part2(day24Data)}`); //
