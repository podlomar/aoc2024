import { readLines } from '../utils.mjs';

export const readInput = (filePath) => {
  const lines = readLines(filePath).slice(0, -1);
  const list1 = [];
  const list2 = [];

  for (const line of lines) {
    const [a, b] = line.split('   ');
    list1.push(Number(a));
    list2.push(Number(b));
  }

  return [list1, list2];
};