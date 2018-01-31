// 用来判断class名是否存在,在removeClass.js有有用到
export function hasClass(el, className) {
  let result = false
  if (Object.prototype.toString.apply(className) === '[object String]') {
    let classes = el.className.split(' ')
    className.split(' ').forEach(el => {
      // 判断在已有class(classes数组)中是不是有className
      result = classes.findIndex(i => i === el) > -1
    })
  }
  return result
}
