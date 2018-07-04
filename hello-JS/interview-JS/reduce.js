let arr1 = [1, 2, 3]
let arr = arr1.reduce((prev, curr, index) => {
  console.log(index)
  prev.push(curr)
  return prev
}, [4, 5, 6])

console.log(arr)