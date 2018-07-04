
//typeof
let dataType = [123,'123',true,{},[],function(){},undefined,null];

console.log(`typeof判断的类型分别如下：`);
for(let i = 0; i < dataType.length; i++){
    console.log(typeof dataType[i]);
}
console.log(typeof window);


//null和undefined
console.log(`null和undefined分别被转换成什么：`);
console.log(Number(null));
console.log(Number(undefined));

var obj = null;
obj = [1];
console.log(obj);

//isNaN

console.log(isNaN(undefined));
console.log(isNaN([]));
console.log(isNaN(['11']));

//输出多行字符串
var lines = (function () { /*
line 1
line 2
line 3
*/}).toString().split('\n').slice(1, -1).join('\n');

console.log(lines);

console.log((function () { /*
line 1
line 2
line 3
*/}).toString().split('\n'));

//字符串可以视为字符数组

var str = 'hello';
console.log(str[0]);
console.log(str[4]);
console.log(str.length);


//数据类型转化

//number()
console.log(`Number()强制转化其他数据类型:`);
var arrType = [123,'echo',true,undefined,null,['echo'],{},function(){}];
for(let j = 0; j < arrType.length; j++){
    console.log(Number(arrType[j]));
}


var obj = [1];
console.log(obj.valueOf());