
var net = require('net')

// var server = net.createServer(socket => {
//   socket.on('data', data => {
//     socket.write('你好，我是返回的数据')
//   })
//   socket.on('end', function () {
//     console.log('断开Tcp连接')
//   })
//   socket.write('欢迎光临')
// })

// server.listen(8124, function () {
//   console.log('tcp server start at port 8124')  
// })
var server = net.createServer()
server.on('connection', socket => {
  console.log('链接上了tcp')
})

server.listen(8124)