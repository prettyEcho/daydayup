let obj = {
    a: 1
}

obj = {
    ...obj,
    a: 2
}

console.log( obj );

let obj1 = {
    a: 1
}

Object.assign(obj1, {b: 2});
console.log(obj1);