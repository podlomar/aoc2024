// Advent of Code: Day 3 Part 1
// Run with deno run -R part1.ts your-input.txt

const input = Deno.readTextFileSync(Deno.args[0]);
const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;

let result = 0;
let match = mulRegex.exec(input);
while (match !== null) {
  const [, a, b] = match;
  result += Number(a) * Number(b);
  match = mulRegex.exec(input);
}

console.log(`Result: ${result}`);
