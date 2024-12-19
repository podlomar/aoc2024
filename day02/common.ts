type Input = number[][];

export const readInput = (filePath: string): Input => {
  const lines = Deno.readTextFileSync(filePath).split('\n');
  return lines.map((line) => line.split(' ').map(Number));
};

// Checks if the given levels are all increasing or all decreasing.
export const isReportSafe = (report: number[]): boolean => {
  let prevDelta = 0;

  for (let i = 0; i < report.length - 1; i++) {
    const delta = report[i + 1] - report[i];
    if (Math.abs(delta) === 0) {
      return false;
    }
    
    if (Math.abs(delta) > 3) {
      return false;
    }

    if (delta * prevDelta < 0) {
      return false;
    }

    prevDelta = delta;
  }

  return true;
};
