const fs = require('fs')
const path = require('path')
const mime = require('mime')

const staticServer = function (res, pathname) {
  fs.readFile(__dirname + '/..' + pathname, 'utf8', (err, data) => {
    if (err) {
      return res.end(err.message)
    }
    let mimeType = mime.getType(pathname)
    if (mimeType.startsWith) {
      
    }
  })
}