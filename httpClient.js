const http = require('http')

var options = {
  hostname: 'webevent.cc',
  port: '80',
  path: '/qymarathon/index',
  method: 'GET'
}

var req = http.request(options, res => {
  console.log(Buffer.isBuffer(res))
})
req.end()