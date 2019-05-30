
/**
 * 路由列表
 */
class routerList {
  '/hello' (res) {
    // 进入该路由的回调 
    res.end('hello world')
  }
}

// 获取路由列表
const routerArr = Object.getOwnPropertyNames(routerList.prototype)

module.exports = {
  routerArr,
  list: new routerList()
}
