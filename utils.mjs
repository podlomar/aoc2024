import fs from 'node:fs';

export const readLines = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf8');
  return data.split('\n');
};
