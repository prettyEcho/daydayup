//object
const toString = Object.prototype.toString;

console.log( toString.call(new Date) );  //[object Date]
console.log( toString.call(function(){}) );  //[object Function]
console.log( toString.call({}) ); //[object Object]
console.log( toString.call(Array) ); //[object Function]
console.log( toString.call(Object) ); //[object Function]
console.log( toString.call(null) ); //[object Null]
console.log( toString.call(undefined) ); //[object Undefined]


//number
const num = 1;
const fNum = 1.1;
console.log( num.toString() );
console.log( fNum.toString() );

//null
//console.log(null.toString());

//undefined
//console.log( undefined.toString() );



console.log(JSON.stringify({}));

let a = {};
console.log( typeof a.a == 'undefined');
