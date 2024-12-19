// Advent of Code 2024: Day 1, Part 2
// Run with deno run -R part2.ts your-input.txt

import { readInput } from './common.ts';

// Finds the number of occurrences of the given item in the list.
const countOccurrences = (list: number[], item: number): number => {
  let count = 0;
  for (const element of list) {
    if (element === item) {
      count++;
    }
  }
  return count;
};

// Computes the similarity score between the two lists.
const computeSimilarity = (list1: number[], list2: number[]): number => {
  let similarity = 0;
  
  for (let i = 0; i < list1.length; i++) {
    const occurences = countOccurrences(list2, list1[i]);
    similarity += list1[i] * occurences;
  }

  return similarity;
};

// Main program

const { list1, list2 } = readInput(Deno.args[0]);
const similarityScore = computeSimilarity(list1, list2);
console.log(`Similarity score: ${similarityScore}`);
