// Advent of Code: Day 4, Part 2
// Run with deno run -R part2.ts your-input.txt

import { Plan } from "../lib/plan.ts";

const checkForXmas = (plan: Plan<string>, startx: number, starty: number): boolean => {
  let diagonal = '';
  let antiDiagonal = '';
  
  for (let i = 0; i < 3; i++) {
    diagonal += plan.at(startx + i, starty + i);
    antiDiagonal += plan.at(startx + 2 - i, starty + i);
  }

  return (
    (diagonal === 'MAS' || diagonal === 'SAM') &&
    (antiDiagonal === 'MAS' || antiDiagonal === 'SAM')
  );
}

const plan = Plan.fromFile(Deno.args[0]);
let xmasCount = 0;

for (let startx = 0; startx < plan.width - 2; startx++) {
  for (let starty = 0; starty < plan.height - 2; starty++) {
    if (checkForXmas(plan, startx, starty)) {
      xmasCount++;
    }
  }
}

console.log(`XMAS count: ${xmasCount}`);