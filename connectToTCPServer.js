var net = require('net')
var client = net.connect({
  // path: path
  port: 8124,
}, function () {
  console.log('client connect')
})

client.on('data', data => {
  console.log(data.toString(), data)
})

client.on('end', function () {
  console.log('client disconnect')
})