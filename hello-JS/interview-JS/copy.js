let obj1 = {
  a: 1,
  b: 2,
  c: {
    z: 3
  }
}

function deepCopy(obj) {
  let temp = {}
  assign(temp, obj)
  return temp
}

function assign(target, cur) {
  if (typeof cur !== 'object') {
    return false
  } else {
    for (let [key, value] of Object.entries(cur)) {
      if (typeof cur[key] === 'object') {
        target[key] = typeof target[key] === 'object' ? target[key] : {}
        assign(target[key], cur[key])
      } else {
        target[key] = cur[key]
      }
    }
  }
}

console.log(deepCopy(obj1))