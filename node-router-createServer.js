const http = require('http')
const url = require('url')
const querystring = require('querystring')
const router = require('./node-router-routerOrStatic')

function handleMethod (req, data, callback) {
  switch (req.method) {
    case 'GET':
      var query = url.parse(req.url, true).query
      callback(query)
      break;
    case 'DELETE':
      var query = url.parse(req.url, true).query
      callback(query)
      break;
    case 'POST':
      data = Buffer.concat(data).toString()
      var params = querystring.parse(data)
      callback(params)
      break;
    default: 'GET'
      break;
  }
}

function handleRouter (req, callback) {
  var data = []
  req.on('error', (err) => {
    return console.error(err)
  }).on('data', chunk => {
    data += chunk
  }).on('end', () => {
    handleMethod(req, data, callback)
  })
}

const start = () => {
  var server = http.createServer((req, res) => {
    console.log(res)
    handleRouter(req, params => {
      router(req, res, params)
    })
  })
  server.listen('3000', '127.0.0.1', () => {
    console.log('server is running on port 3000')
  })
}

module.exports.start = start