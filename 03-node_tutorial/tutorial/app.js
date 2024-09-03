const { readFileSync, writeFileSync } = require('fs');
// const fs = require('fs');
// fs.readFileSync;

// Read file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// console.log(first, second);

// Write file
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);
