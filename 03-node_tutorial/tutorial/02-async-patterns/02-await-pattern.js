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

// Using a Promise
getText('./content/first.txt')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
