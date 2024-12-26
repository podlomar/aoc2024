//------------------------------------------------------------------------------
// Advent of Code: Day 3 Part 2
// Run with deno run -R part2.ts your-input.txt
//------------------------------------------------------------------------------

const input = Deno.readTextFileSync(Deno.args[0]);
const regex = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;

let result = 0;
let mulIsOn = true;
let match = regex.exec(input);
while (match !== null) {
  if (match[0] === 'do()') {
    mulIsOn = true;
  } else if (match[0] === 'don\'t()') {
    mulIsOn = false;
  } else if (mulIsOn) {
    const [, a, b] = match;
    result += Number(a) * Number(b);
  }

  match = regex.exec(input);
}

console.log(`Result: ${result}`);
