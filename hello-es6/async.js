function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

async function doSoming(word, time) {
  await sleep(time)
  console.log(word)
}

doSoming('hello world', 1000)

// async promise resolve
async function print(some) {
  return some
}

print('你好').then(v => {
  console.log(v)
})

// async promiss reject

async function errorPrint() {
  throw new Error('error')
}

errorPrint().catch(e => {
  console.log(e)
})

// async 错误处理
async function fn() {
  try {
    await Promise.reject('err')
  } catch (e) {
    console.log(e)
  }
  return Promise.resolve('123')
}

fn().then(v => {
    console.log(v)
  })
  .catch(e => {
    console.log(e)
  })