// CommonJS, every ile is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names');
// const { adrian, peter } = require('./04-names');
const sayHi = require('./05-utils');
// console.log(names);

sayHi('susan');
// sayHi(adrian);
sayHi(names.adrian);
// sayHi(peter);
sayHi(names.peter);
