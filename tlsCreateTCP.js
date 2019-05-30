var tls = require('tls')
var fs = require('fs')

var options = {
  key: fs.readFileSync('./keys/ca.key'),
  ca: fs.readFileSync('./keys/ca.crt'),
  cert: fs.readFileSync('./keys/ca.crt'),
  requestCert: true
}

var server = tls.createServer(options, stream  => {
  stream.write('werlcome!\n')
  stream.setEncoding('utf8')
  stream.pipe(stream)
})

server.listen(8000, function () {
  console.log('create TCP By TLS')
})