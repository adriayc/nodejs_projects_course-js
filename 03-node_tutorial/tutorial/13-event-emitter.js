const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on and emit method
// keep track of the order
// additional arguments
// built-in modules utilize it

// on - listen for an event
// customEmitter.on('response', () => {
//   console.log(`Data received`);
// });
customEmitter.on('response', (name, id) => {
  console.log(`Data received user ${name} with id: ${id}`);
});
customEmitter.on('response', () => {
  console.log(`Some other logic here`);
});

// emit - emit an event
// customEmitter.emit('response');
customEmitter.emit('response', 'Adrian', 34);
