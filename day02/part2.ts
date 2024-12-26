//------------------------------------------------------------------------------
// Advent of Code: Day 2, Part 2
// Run with deno run -R part2.ts your-input.txt
//------------------------------------------------------------------------------

import { readInput, isReportSafe } from './common.ts';

//------------------------------------------------------------------------------
// Functions
//------------------------------------------------------------------------------

// Tries all possible splices of the given report and checks if any of them is safe.
const tryAllSplices = (report: number[]): boolean => {
  if (isReportSafe(report)) {
    return true;
  }
  
  for (let i = 0; i < report.length; i++) {
    if (isReportSafe(report.toSpliced(i, 1))) {
      return true;
    }
  }

  return false;
}

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

const reactor = readInput(Deno.args[0]);

let safeCount = 0;
for (const report of reactor) {
  if (tryAllSplices(report)) {
    safeCount++;
  }
}

console.log(`Safe reports: ${safeCount}`);