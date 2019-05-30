// worker.js 创建TCP服务的文件
var cluster = require('cluster')
var numCPUs = require('ps').cpus().length

cluster.setupMaster({
  exec: 'worker.js'
})

for (let i = 0; i < numCPUs; i++) {
  cluster.fork()
}