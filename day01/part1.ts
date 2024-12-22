// -----------------------------------------------------------------------------
// Advent of Code 2024: Day 1, Part 1
// Run with deno run -R part1.ts your-input.txt
// -----------------------------------------------------------------------------

import { readInput } from './common.ts';

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------

const { list1, list2 } = readInput(Deno.args[0]);
list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);

let distance = 0;
for (let i = 0; i < list1.length; i++) {
  const diff = Math.abs(list1[i] - list2[i]);
  distance += diff;
}

console.log(`Distance: ${distance}`);
