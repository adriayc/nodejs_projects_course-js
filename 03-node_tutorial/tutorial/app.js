// npm - global command, comes with node
// npm --version
// npm --v

// Local dependency - use it only in this particular project
// npm i <packageName>

// Global dependency - use it in any project
// npm install -g <packageName>
// sudo install -b <packageName> (Mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties, etc)
// npm init (Step by step, press enter to skip)
// npm init -y (Everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
