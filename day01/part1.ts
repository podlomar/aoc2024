// Advent of Code 2024: Day 1, Part 1
// Run with deno run -R part1.ts your-input.txt

import { readInput } from './common.ts';

// Finds the index of the minimum element in the list starting from the offset.
const findMin = (list: number[], offset: number): number => {
  let min = list[offset];
  let minIndex = offset;
  for (let i = offset + 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
      minIndex = i;
    }
  }
  return minIndex;
};

// Swaps two elements at the given indices in the list.
const swap = (list: number[], i: number, j: number): void => {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

// Computes the distance between the two lists.
const computeDistance = (list1: number[], list2: number[]): number => {
  let distance = 0;
  for (let i = 0; i < list1.length; i++) {
    const min1 = findMin(list1, i);
    const min2 = findMin(list2, i);
    
    swap(list1, i, min1);
    swap(list2, i, min2);

    const diff = Math.abs(list1[i] - list2[i]);
    distance += diff;    
  }

  return distance;
};

// Main program

const { list1, list2 } = readInput(Deno.args[0]);
const distance = computeDistance(list1, list2);
console.log(`Distance: ${distance}`);
