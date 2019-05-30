// 只能接受btf8, base64的文本，图片会乱码
const fs = require('fs')
const rs = fs.createReadStream('./upload-bg.png')
rs.setEncoding('utf8') // 一定要记得设置ecoding,不然中文会乱码
var data = ''
rs.on('data', chunk => {
  data += chunk
})
rs.on('end', () => {
})

