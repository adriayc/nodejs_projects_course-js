const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on - listen for an event
customEmitter.on('response', () => {
  console.log(`Data received`);
});

// emit - emit an event
customEmitter.emit('response');
