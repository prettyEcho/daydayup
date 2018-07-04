function Foo(name) {
    this.name = name;
}

let foo = new Foo('echo');

/* for( let item in foo ) {
    console.log( item );
} */

console.log( Object.getOwnPropertyNames(Object) );
console.log( Object.getOwnPropertyNames(Function) );
console.log( Object.getOwnPropertyNames(Foo) );
console.log( Object.getOwnPropertyNames(foo) );
console.log( Function.__proto__ );


/* 

//new chain
Function = new Object();
Foo = new Function();
foo = new Foo();

//__proto__ chain
foo.__proto__ = Foo.prototype
Foo.__proto__ = Function.prototype
Function = Object.prototype 

*/