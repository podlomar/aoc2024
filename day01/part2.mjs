import { readInput } from './common.mjs';

const computeCount = (item, list) => {
  let count = 0;
  for (const element of list) {
    if (element === item) {
      count++;
    }
  }
  return count;
};

const computeScore = (list1, list2) => {
  let score = 0;
  
  for (let i = 0; i < list1.length; i++) {
    const count = computeCount(list1[i], list2);
    score += list1[i] * count;
  }

  return score;
};

const [list1, list2] = readInput(process.argv[2]);
const score = computeScore(list1, list2);
console.log(score);