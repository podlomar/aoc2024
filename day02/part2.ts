// Advent of Code: Day 2, Part 2
// Run with deno run -R part2.ts your-input.txt

import { readInput, isReportSafe } from './common.ts';

const reactor = readInput(Deno.args[0]);

// Tries all possible splices of the given report and checks if any of them is safe.
const tryAllSplices = (report: number[]): boolean => {
  for (let i = 0; i < report.length; i++) {
    const spliced = report.toSpliced(i, 1);
    if (isReportSafe(spliced)) {
      return true;
    }
  }

  return false;
}

// Main program

let safeCount = 0;
for (const report of reactor) {
  if (isReportSafe(report)) {
    safeCount++;
  } else if (tryAllSplices(report)) {
    safeCount++;
  }
}

console.log(`Safe reports: ${safeCount}`);