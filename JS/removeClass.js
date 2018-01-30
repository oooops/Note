export function removeClass(obj, className) {
  // 判断传入的className是不是字符串
  if (Object.prototype.toString.apply(className) === '[object String]') {
    // 获取对象的clssNmae,数组形式
    let classes = obj.className.split(' ')
    // 判断需要移除的className在不在已有className中
    // 如果传入的className是个数组,分隔判断
    className.split(' ').forEach(cl => {
      const _index = classes.findIndex(name => name === cl)
      // 如果存在class名,删除
      if (_index > -1) {
        classes.splice(_index, 1)
      }
    })
    // 删除后的方法名恢复为字符串
    obj.className = classes.join(' ')
  }
}
