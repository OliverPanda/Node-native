const http = require('http')
const qs = require('querystring')

http.createServer((req, res) => {
  let postData = 'test' // 测试用，返回数据里加个初始值
  req.setEncoding('utf-8')
  req.on('data', chunk => {
    postData += chunk
  })
  req.on('end', () => {
    res.end(postData)
  })
}).listen(8080)