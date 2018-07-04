"use strict";

/*
* 编写一个javscript函数 fn，该函数有一个参数 n（数字类型），
* 其返回值是一个数组，该数组内是 n 个随机且不重复的整数，且整数取值范围是 [2, 32]
*
*   开发插件的的几个原则：
*       可用： 能够完成基本的功能
*       健壮： 对入口有一定的检测（参数）  ---入口
*       可靠： 保证有正确的返回值（即使遇到错误）   ---出口
*       宽容： 如果参数的类型不对，是否可以允许其继续执行程序
*       精益求精： 时刻以这四个原则要求自己
*
* */
/*
//核心代码
function fn(n){
    //判断参数是否存在并且为数字
    if(n && typeof(n) === "number"){
        //判断参数是否在0到31之间
        if(n <= 31 && n >= 0){
            //判断是否为整数
            if(!isInteger(n)){
                console.log("请输入整数n");
                return false;
            }
            //生成一个容器
            let temp = [];
            //便利个数
            for (let i = 0; i < n; i++){
                //生成一个随机数
                let rnd = getRand(2,32);
                //判断是否重复
                if( !checkInArr(temp, rnd) ){
                    i--;
                }else{
                    temp.push(rnd);
                }

            }
            console.log(temp);
        }
        else{
            console.log("请输入0到31之间的参数n")
        }
    }else{
        console.log("请输入正确的参数n");
    }
}*/

/*
* 改良版的核心代码
* */

function fn(n) {
    var start = 2,
        end = 32;

    //校验
    if (!isThere(n)) return [];
    if (!isNum(n)) return []; //可做如果是字符串，允许进入的操作
    if (!isInteger(n)) return []; //可做如果是小数，允许进入的操作
    if (!isRandNum(n, start, end)) return [];

    //核心处理

    //生成一个容器
    var temp = [];
    //遍历个数
    for (var i = 0; i < n; i++) {
        //生成一个随机数
        var rnd = getRand(2, 32);
        //判断是否重复
        if (!checkInArr(temp, rnd)) {
            i--;
        } else {
            temp.push(rnd);
        }
    }
    return temp;
}

//生成随机数函数
function getRand(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

//判断是否重复函数
function checkInArr(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return false;
        }
    }
    return true;
}

//判断是否存在
function isThere(num) {
    if (num) {
        return true;
    }
    return false;
}

//判断是否为数字类型
function isNum(num) {
    if (typeof num === "number") {
        return true;
    }
    return false;
}

//判断是否为复合区间内的数字
function isRandNum(num, start, end) {
    if (num >= start && num <= end) {
        return true;
    }
    return false;
}

//判断是否为整数
function isInteger(num) {
    if (num - Math.floor(num)) {
        return false;
    }
    return true;
}

var result = fn(22);
console.log(result);

//# sourceMappingURL=return-array-compiled.js.map