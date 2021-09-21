const EventEmitter = require('events');
const emitter = new EventEmitter();
const callback1 = (args) => {
    console.log('first callback - ', args);
};
emitter.on('winter', callback1);


emitter.on('winter', (args) => {
    console.log('second callback - ', args);
});

emitter.emit('winter', { message: 1});
emitter.emit('winter', { message: 2});
// emitter.removeListener('winter', callback1);
emitter.removeAllListeners();
emitter.emit('winter', { message: 3});