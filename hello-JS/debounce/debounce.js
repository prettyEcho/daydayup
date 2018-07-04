function debounce(fn, timeout) {
  var timer = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, timeout)
  }
}

function fn() {
  console.log(1)
}

setInterval(() => {
  debounce(1000, fn)()
}, 100)
