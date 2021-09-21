const EventEmitter = require('events');

class Logger extends EventEmitter {
log(callback) {
    this.emit('log', 'started...'); // 자신에게 속해 있는 함수를 사용할 때는 this를 붙여준다고 함
    callback()
    this.emit('log', 'ended!');
}
}

module.exports.Logger = Logger;