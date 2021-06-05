const EventEmitter = require('events')

// Event class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter()

// Event listener
myEmitter.on('test-event', () => console.log('Test Event Fired!'))

// Call event
myEmitter.emit('test-event')