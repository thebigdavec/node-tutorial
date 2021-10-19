const EventEmitter = require('events')

const customEmitter = new EventEmitter()

const handleResponse = () => {
  console.log(`data received `)
}

customEmitter.on('response', handleResponse)

customEmitter.emit('response')
