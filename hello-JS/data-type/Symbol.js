const util = require('util');

let obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'a';
obj[b] = 'b';
obj.a = 'A';

console.log( obj[a] );

//getOwnPropertySymbols
let SymbolArray = Object.getOwnPropertySymbols(obj);

//Reflect.ownKeys
let SymbolKeys = Reflect.ownKeys(obj);

//Symbol
let foo1 = Symbol('foo');
let foo2 = Symbol('foo');
console.log(foo1 == foo2);

//Symbol.for
let foo3 = Symbol.for('foo');
let foo4 = Symbol.for('foo');
console.log(foo3 == foo4);

//Symbol.keyFor
console.log(Symbol.keyFor(foo1)); //undefined
console.log(Symbol.keyFor(foo3)); //foo


