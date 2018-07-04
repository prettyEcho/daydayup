
var arr = [1,{a: 1}];
var fromArr = Array.from(arr);
fromArr[1].a = 2;
console.log(arr, fromArr);


const set = new Set([1,2,2,3]);
console.log( Array.from(set) ); //[1,2,3]


function f() {
    return [].slice.call(arguments);
}
console.log(f(1,2)); //[1,2]

console.log( Array.from({ length: 5 }).length );
console.log( Array(5).length );