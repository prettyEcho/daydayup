/*let arr3 = [1,2,3];
console.log(arr3.push("a","b"));*/

/*let arr1 = [4,5,6],
    arr2 = [1,2,3];
let arr = Array.prototype.push.apply(arr1,arr2);
console.log(arr); //6
console.log(arr1); //
console.log(arr2); //*/

let arr3 = [1,2,3];
console.log(arr3.pop());
console.log(arr3);

let arr1 = [4,5,6],
    arr2 = [1,2,3];
let arr = Array.prototype.unshift.apply(arr1,arr2);
console.log(arr); //6
console.log(arr1); //
console.log(arr2); //

let arr4 = [1,2,3];
let val = arr4.splice(1,1);
console.log(val);