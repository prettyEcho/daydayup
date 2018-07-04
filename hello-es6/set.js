console.log([...new Set([1, 2, 'a', 3, 1])])

let s = new Set([1, 2, 3, 1, 1, 2])

// 添加
s.add(4)

// 删除 => boolean
s.delete(1)

// 遍历
for (let i of s) {
  console.log(i)
}

// keys
for (let i of s.keys()) {
  console.log(i)
}

// values
for (let i of s.values()) {
  console.log(i)
}

// entries
for (let i of s.entries()) {
  console.log(i)
}

// ...
console.log([...s])

// has
console.log(s.has(2))

// clear
s.clear()

// 大小
console.log(s.size)

// 应用
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
console.log([...new Set([...a, ...b])])

// 差集
console.log([...a].filter(item => !b.has(item)))
console.log([...b].filter(item => !a.has(item)))
let different = [...a].filter(item => !b.has(item)).concat([...b].filter(item => !a.has(item)))
console.log(different)

// 交集
console.log([...a].filter(item => b.has(item)))
console.log([...b].filter(item => a.has(item)))