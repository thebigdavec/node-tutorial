const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  console.log(req.url)
  res.write('Welcome')
  if (req.url === '/about') {
    res.write(': ABOUT')
  }
  res.end()
})

server.listen(5000)
