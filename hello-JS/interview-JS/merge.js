const _ = require('lodash')

// 对象浅拷贝
let obj1 = {
  a: 1,
  b: 2,
  d: {
    f: 5
  }
}

let obj2 = {
  a: 2,
  c: 3,
  d: {
    e: 4
  }
}

let obj3 = {
  d: {
    m: 7
  }
}

/* let obj = Object.assign({}, obj1, obj2)
let { ...obj
} = {
  ...obj1,
  ...obj2
}

console.log(obj) */

// 对象深拷贝
let obj = _.defaultsDeep(obj1, obj2, obj3)
console.log(obj)

function deep() {
  // get arg array
  // let args = [...arguments]
  // let args = Array.from(arguments)
  let args = [].slice.call(arguments)
  let len = args.length
  let temp = {}

  for (let i = 0; i < len; i++) {
    assign(temp, args[i])
  }
  return temp
}

function assign(target, cur) {
  for (let [key, value] of Object.entries(cur)) {
    if (typeof value === 'object') {
      target[key] = typeof target[key] === 'object' ? target[key] : {}
      assign(target[key], cur[key])
    } else {
      target[key] = cur[key]
    }
  }
}

console.log(deep(obj1, obj2, obj3))