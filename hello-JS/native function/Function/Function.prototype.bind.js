/*
* Function.prototype.bind
*
*   示例：var objC = objA.bind(objB, arguments);
*
*   1.返回一个新的函数；
*   2.新函数的函数体时objA,this指向的objB；
*   3.arguments为objC的预设参数；
*
*
* */

function myBind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments)
  }
}

var x = 1

var test = {
  x: 2,
  getX: function() {
    console.log(this.x)
  }
}

newFn = test.getX

var echo = myBind(newFn, test)
var echo1 = newFn.bind(test)

echo()
echo1()

console.log(newFn.bind(test))
