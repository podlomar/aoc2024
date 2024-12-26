//------------------------------------------------------------------------------
// Advent of Code: Day 4, Part 1
// Run with deno run -R part1.ts your-input.txt
//------------------------------------------------------------------------------

import { Plan } from "../lib/plan.ts";

//------------------------------------------------------------------------------
// Functions
//------------------------------------------------------------------------------

// Count the number of XMAS and SAMX words in a line of characters.
const countLineXmas = (line: string[]): number => {
  let count = 0;
  for (let i = 0; i <= line.length - 4; i++) {
    const word = line.slice(i, i + 4).join('');
    if (word === 'XMAS' || word === 'SAMX') {
      count++;
    }
  }

  return count;
}

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

const plan = Plan.fromFile(Deno.args[0]);
const lines = [
  ...plan.rows(),
  ...plan.columns(),
  ...plan.diagonals(),
  ...plan.antiDiagonals(),
]

let xmaxCount = 0;
for (const line of lines) {
  xmaxCount += countLineXmas(line);
}

console.log(`XMAS count: ${xmaxCount}`);