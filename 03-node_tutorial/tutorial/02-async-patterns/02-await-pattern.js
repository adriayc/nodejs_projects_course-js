// const { readFile, writeFile } = require('fs');
const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// Async / Await
const start = async () => {
  try {
    // const first = await readFilePromise('./content/first.txt', 'utf8');
    // const second = await readFilePromise('./content/second.txt', 'utf8');
    // await writeFilePromise(
    //   './content/result-mind-grenade.txt',
    //   `THIS IS AWESOME: ${first} ${second}`
    // );

    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME: ${first} ${second}`,
      { flag: 'a' }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   // Creating a Promise
//   return new Promise((resolve, reject) => {
//     readFile('./content/first.txt', 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// Async / Await
// const start = async () => {
//   try {
//     const first = await getText('./content/first.txt');
//     const second = await getText('./content/second.txt');
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// Using a Promise
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
