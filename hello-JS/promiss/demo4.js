let p = Promise.resolve(1);

p.then(val => {
    console.log( val );
}).then(val => {
    console.log( val );
})