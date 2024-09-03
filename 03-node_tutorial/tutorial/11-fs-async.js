const { readFile, writeFile, read } = require('fs');

console.log('Start');
// Read file
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(result);
  const first = result;

  // Read file
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    // Write file
    writeFile(
      './content/result-sync.txt',
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(result);
        console.log('Done with this task');
      }
    );
  });
});

console.log('Starting next task');
