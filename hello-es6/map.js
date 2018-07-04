let m = new Map([
  ['a', 1],
  ['b', 2]
])

// 获取
console.log(m.get('a'))

// 赋值
m.set('a', 3)
console.log(m.get('a'))

// 遍历

// keys
for (let key of m.keys()) {
  console.log(key)
}

// values
for (let value of m.values()) {
  console.log(value)
}

// entries
for (let [key, value] of m.entries()) {
  console.log(key, value)
}

// Map => Array
console.log([...m])