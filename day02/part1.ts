//------------------------------------------------------------------------------
// Advent of Code 2024: Day 2, Part 1
// Run with deno run -R part1.ts your-input.txt
//------------------------------------------------------------------------------

import { readInput, isReportSafe } from './common.ts';

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

const input = readInput(Deno.args[0]);

let safeCount = 0;
for (const report of input) {
  if (isReportSafe(report)) {
    safeCount++;
  }
}

console.log(`Safe reports: ${safeCount}`);