interface Input {
  list1: number[];
  list2: number[];
}

export const readInput = (filePath: string): Input => {
  const lines = Deno.readTextFileSync(filePath).split('\n');
  const input: Input = { list1: [], list2: [] };

  for (const line of lines) {
    const [a, b] = line.split('   ');
    input.list1.push(Number(a));
    input.list2.push(Number(b));
  }

  return input;
};
