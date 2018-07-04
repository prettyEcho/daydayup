console.log( 'global1' );


setTimeout(() => {
    console.log('setTimeOut1');
}, 1000);

setImmediate(() => {
    console.log('setImmediate1');
}, 1000);

setTimeout(() => {
    console.log('setTimeOut2');
}, 1000);

setImmediate(() => {
    console.log('setImmediate2');
}, 1000);

console.log( 'global2');