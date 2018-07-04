/*
* Function.prototype.call
*
*   示例：objA.call(objB,argument1,argument2);
*
*   1.把objA中的this指向objB;
*   2.
*
*
*
* */


//应用
let obj = {
    x: 2
};

let fn = function(){
    console.log(this.x);
    console.log(arguments[0]);
};

fn.call(obj,1);


//方法

Function.prototype.myCall = function(obj, arg){
    return +function(arg){
        //如何改变this指向？
    }(arg);
}
