var tls = require('tls')
var fs = require('fs')

var options = {
  key: fs.readFileSync('./keys/ca.key'),
  ca: fs.readFileSync('./keys/ca.crt'),
  cert: fs.readFileSync('./keys/ca.crt')
}

var stream = tls.connect(8000, options, () => {
  console.log('client connected, stream.authorized: ', stream.authorized)
  process.stdin.pipe(stream)
})

stream.setEncoding('utf8')
stream.on('data', data => {
  console.log(data)
})
stream.on('end', () => {
  server.close()
})