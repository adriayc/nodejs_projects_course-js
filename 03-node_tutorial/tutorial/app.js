// CommonJS, every ile is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names');
// const { adrian, peter } = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
// Self invoke
require('./07-mind-grenade');
// console.log(names);
// console.log(data);

// sayHi('susan');
// sayHi(adrian);
// sayHi(names.adrian);
// sayHi(peter);
// sayHi(names.peter);
