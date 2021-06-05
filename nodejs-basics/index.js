const Logger = require('./logger')

const logger = new Logger()

logger.on('log', data => console.log(data))

logger.log('Hello World!')