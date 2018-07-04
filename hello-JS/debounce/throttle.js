/* function throttle(fn, delay, time) {
  var timer = null,
    startTime = +new Date()
  return function() {
    var curTime = +new Date()
    clearTimeout(timer)

    if (curTime - startTime >= time) {
      fn.apply(this, arguments)
      startTime = curTime
    } else {
      timer = setTimeout(fn, delay)
    }
  }
} */

function fn(arr) {
  let oMap = new Map()
  for (let i of arr) {
    if (oMap.get(i)) {
      oMap.set(i, oMap.get(i) + 1)
    } else {
      oMap.set(i, 1)
    }
  }
  console.log([...oMap])
  ;[...oMap].forEach(([key, value]) => {
    if (value > 2) {
      console.log(key)
    }
  })
}

let arr = [1, 2, 2, 1, 2, 2, 3, 4, 1]
fn(arr)

let map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c')

let map1 = new Map([...map0].filter(([k, v]) => k < 3))

console.log(map1)
