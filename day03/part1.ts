// Advent of Code: Day 3 Part 1
// Run with deno run -R part1.ts your-input.txt

const input = Deno.readTextFileSync(Deno.args[0]);
const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;

let result = 0;
while (true) {
  const match = mulRegex.exec(input);
  if (match === null) {
    break;
  }

  const [_, a, b] = match;
  result += Number(a) * Number(b);
}

console.log(`Result: ${result}`);
