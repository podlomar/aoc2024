import { readInput } from './common.mjs';

const findMin = (list, offset) => {
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

const computeDistance = (list1, list2) => {
  let distance = 0;
  
  for (let i = 0; i < list1.length; i++) {
    const min1 = findMin(list1, i);
    const min2 = findMin(list2, i);
    
    const temp1 = list1[i];
    list1[i] = list1[min1];
    list1[min1] = temp1;

    const temp2 = list2[i];
    list2[i] = list2[min2];
    list2[min2] = temp2;

    const diff = Math.abs(list1[i] - list2[i]);
    distance += diff;    
  }

  return distance;
};

const [list1, list2] = readInput(process.argv[2]);
const distance = computeDistance(list1, list2);
console.log(distance);