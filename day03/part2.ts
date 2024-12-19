// Advent of Code: Day 3 Part 2
// Run with deno run -R part2.ts your-input.txt

const input = Deno.readTextFileSync(Deno.args[0]);
const regex = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;

let result = 0;
let mulIsOn = true;
while (true) {
  const match = regex.exec(input);
  if (match === null) {
    break;
  }

  if (match[0] === 'do()') {
    mulIsOn = true;
    continue;
  }

  if (match[0] === 'don\'t()') {
    mulIsOn = false;
    continue;
  }

  if (mulIsOn) {
    const [_, a, b] = match;
    result += Number(a) * Number(b);
  }
}

console.log(`Result: ${result}`);
