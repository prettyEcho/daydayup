let obj = {
    a: 1
}

let result = Object.keys(obj);

console.log( result );

console.log(delete obj.a);
console.log(delete obj.b);
console.log( obj );
console.log( Object.keys(obj) );


let obj1 = {
    'a': 1,
    [Symbol('foo')]: 2
}
console.log( 'b' in obj1 );
console.log(  obj1.hasOwnProperty('a') );
console.log(  obj1.hasOwnProperty('toString') );
console.log(  'toString' in obj1 );