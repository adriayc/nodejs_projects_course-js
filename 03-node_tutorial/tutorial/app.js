const { readFile } = require('fs');

const getText = (path) => {
  // Creating a Promise
  return new Promise((resolve, reject) => {
    readFile('./content/first.txt', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// Async / Await
const start = async () => {
  try {
    const first = await getText('./content/first.txt');
    const second = await getText('./content/second.txt');
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// Using a Promise
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
