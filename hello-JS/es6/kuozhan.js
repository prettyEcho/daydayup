let arr = [1,2,3];

console.log([...arr]);

let obj1 = {x: 1};
let obj2 = {x: 2};

let obj = { ...obj1, ...obj2 }; // obj = Object.assign( {}, obj1, obj2 )

console.log( obj );