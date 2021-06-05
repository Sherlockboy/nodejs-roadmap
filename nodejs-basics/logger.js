const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('log', {
            id: uuid.v4(),
            msg
        })
    }
}

// module.exports = Logger;

const logger = new Logger()

logger.on('log', data => console.log(data))

logger.log('Hello World!')