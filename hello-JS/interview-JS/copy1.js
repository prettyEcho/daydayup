let obj1 = [1, 2, 3, {
  a: 2
}]

function deepClone(obj) {
  var newObj = obj instanceof Array ? [] : {};
  //obj属于基本数据类型,直接返回obj
  if (typeof obj !== 'object') {
    return obj;
  } else {
    //obj属于数组或对象，遍历它们
    for (var i in obj) {
      console.log(newObj)
      newObj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }
  return newObj;
}

console.log(deepClone(obj1))