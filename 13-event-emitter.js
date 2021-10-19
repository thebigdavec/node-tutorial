const EventEmitter = require('events')

const customEmitter = new EventEmitter()

const handleResponse = ({ name, id }) => {
  console.log(`data received from user ${id}: ${name}`)
}

customEmitter.on('response', handleResponse)

customEmitter.emit('response', { id: '007', name: 'Dave' })
