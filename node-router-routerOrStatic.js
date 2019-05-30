/**
 * 判断是路由还是静态资源
 */

const fs = require('fs')
const url = require('url')
const routerList = require('./node-router-routerList')

const router = (req, res, params) => {
  let pathname = url.parse(req.url).pathname
  if (pathname.startWith('/assets')) {
    return res.end('这是静态文件')
  }
  let routerItem = isRouter(pathname)
  if (routerItem) {
    return routerList.list[routerItem](res, pathname, params, req.method)
  }
  res.writeHead(404, {
    'Content-Type': 'text/html'
  })
  // 渲染404页面
  fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res)
}


function isRouter(pathname) {
  return routerList.routerArr.find((item, index) => {
    if (pathname === item || pathname.startWith(item) && (item !== '/')) {
      return item
    }
  })
}

module.exports = router