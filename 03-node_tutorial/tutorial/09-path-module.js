const path = require('path');

// Separator
console.log(path.sep);

// Join all give path segments
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// Return the last portion of a path
const base = path.basename(filePath);
console.log(base);

// Resolve a sequence of paths or path segments into an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
