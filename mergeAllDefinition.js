/**
 * definition: 需要导出或者定义的类
 */
(function (name, definition) {
  var hasDefined = typeof define === 'function' // AMD || CMD规范
  var hasExports = typeof module !== 'undefined' && module.exports  // Node环境, CommonJS规范
  if (hasDefined) {
    define(definition)
  } else if (hasExports) {
    module.exports = definition()
  } else {
    // 将模块的执行结果挂载到window下，在浏览器中this指向window
    this[name] = definition()
  }
})('hello', function () {
  var hello = function () {}
  return hello
})