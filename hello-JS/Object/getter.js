/* let obj = {};

Object.defineProperty(obj, 'a', {
    value: 12,
})

let obj1 = {
    b: 1
}

console.log( obj.a );

let obj2 = Object.defineProperty({}, 'a', {
    get: () => 1
})

console.log( obj2.a );


console.log( Object.getOwnPropertyDescriptor(obj, 'a') );
console.log( Object.getOwnPropertyDescriptor(obj2, 'a') );
console.log( Object.getOwnPropertyDescriptor(obj1, 'b') ); */

let obj = {
    p1: 1,
    p2: 2,
    get a() {
        return this.p2;
    },
    set a(x) {
        console.log(333);
        this.p1 += x;
    }
}

obj.b = 1; 

console.log(obj.a);
console.log(obj.p1);
