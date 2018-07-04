let obj = Object.defineProperty({}, 'a', {
    value: 1,
    writable: true,
    configurable: true
});

obj.a = 2;

console.log( obj.a );